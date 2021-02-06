import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Media } from "./media.entity";
import { UpdateResult, DeleteResult } from "typeorm";

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>
  ) {}

  async create(media): Promise<Media> {
    console.log(media);
    return await this.mediaRepository.save(media);
  }

  async findAll(): Promise<Media[]> {
    return await this.mediaRepository.find();
  }

  async findOneById(mediaId): Promise<Media> {
    return await this.mediaRepository.findOne(mediaId);
  }

  async editMedia(mediaId, media): Promise<UpdateResult> {
    return await this.mediaRepository.update(mediaId, media);
  }

  async deleteMedia(mediaId): Promise<DeleteResult> {
    return await this.mediaRepository.delete(mediaId);
  }
}
