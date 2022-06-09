import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Media } from "../entities/media.entity";
import { UpdateResult, DeleteResult } from "typeorm";
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';

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

  async paginate(options: IPaginationOptions): Promise<Pagination<Media>> {
    return paginate<Media>(this.mediaRepository, options);
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
