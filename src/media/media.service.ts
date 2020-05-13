import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection} from 'typeorm';
import { MediaEntity } from './media.entity';
import { MEDIA } from '../../mocks/media.mock';


@Injectable()
export class MediaService {
    media = MEDIA;
    constructor(
        @InjectRepository(MediaEntity)
        private MediaEntity: Repository<MediaEntity>,
        private connection: Connection,
    ) { }

    getMedia(mediaID: any): Promise<any> {
        let id = Number(mediaID);
        return new Promise(resolve => {
            const Media = this.media.find(Media => Media.id === id);
            if (!Media) {
                throw new HttpException('Media does not exist!', 404);
            }
            resolve(Media);
        });
    }
    addMedia(Media): Promise<any> {
        return new Promise(resolve => {
            this.media.push(Media);
            resolve(this.media);
        });
    }
    deleteMedia(MediaID): Promise<any> {
        let id = Number(MediaID);
        return new Promise(resolve => {
            let index = this.media.findIndex(Media => Media.id === id);
            if (index === -1) {
                throw new HttpException('Media does not exist!', 404);
            }
            this.media.splice(1, index);
            resolve(this.media);
        });
    }

    findAll(): Promise<MediaEntity[]> {
        return this.MediaEntity.find();
    }

    findOne(id: string): Promise<MediaEntity> {
        return this.MediaEntity.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.MediaEntity.delete(id);
    }
    async createMany(media: MediaEntity[]) {
        const queryRunner = this.connection.createQueryRunner();
             
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(media[0]);
          await queryRunner.manager.save(media[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(media[0]);
            await manager.save(media[1]);
          });
      }
}
