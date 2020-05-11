import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MediaEntity } from './media.entity';
import { MEDIA } from '../../mocks/media.mock';


@Injectable()
export class MediaService {
    media = MEDIA;

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
    constructor(
        @InjectRepository(MediaEntity)
        private MediaEntity: Repository<MediaEntity>,
    ) { }

    findAll(): Promise<MediaEntity[]> {
        return this.MediaEntity.find();
    }

    findOne(id: string): Promise<MediaEntity> {
        return this.MediaEntity.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.MediaEntity.delete(id);
    }
}
