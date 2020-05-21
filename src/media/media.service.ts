import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection} from 'typeorm';
import { MediaEntity } from './media.entity';
import { CreateMediaDTO } from './dto/create-media.dto';
import { MediaClass } from './classes/media.class';

export type Media = any;

@Injectable()
export class MediaService {
    MediaEntity: any;

    private readonly media: Media[];
    create(media: CreateMediaDTO): MediaClass {
        this.media.push(media);
        return media;
    }

    constructor(
        @InjectRepository(MediaEntity)
        private MediaRepository: Repository<MediaEntity>,
        private connection: Connection,
    ) { }

    getMedia(mediaID): Promise<any> {
        let id = Number(mediaID);
        return new Promise(resolve => {
            const media = this.MediaEntity.find(media => media.id === id);
            if (!media) {
                throw new HttpException('Media does not exist!', 404);
            }
            resolve(media);
        });
    }
    addMedia(media): Promise<any> {
        return new Promise(resolve => {
            this.MediaEntity.push(media);
            resolve(this.MediaEntity);
        });
    }
    deleteMedia(mediaID): Promise<any> {
        let id = Number(mediaID);
        return new Promise(resolve => {
            let index = this.MediaEntity.findIndex(media => media.id === id);
            if (index === -1) {
                throw new HttpException('Media does not exist!', 404);
            }
            this.MediaEntity.splice(1, index);
            resolve(this.MediaEntity);
        });
    }

    findAll(): Promise<MediaEntity[]> {
        return this.MediaRepository.find();
    }

    findOne(id: string): Promise<MediaEntity> {
        return this.MediaRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.MediaRepository.delete(id);
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
