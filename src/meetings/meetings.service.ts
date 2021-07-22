import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Meetings } from "./meet.entity";
import { UpdateResult, DeleteResult } from "typeorm";
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';

@Injectable()
export class MeetingsService {
  constructor(
    @InjectRepository(Meetings)
    private meetRepository: Repository<Meetings>
  ) {}

  async create(meet): Promise<Meetings> {
    console.log(meet);
    return await this.meetRepository.save(meet);
  }

  async findAll(): Promise<Meetings[]> {
    return await this.meetRepository.find();
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Meetings>> {
    return paginate<Meetings>(this.meetRepository, options);
  }

  async findOneById(meetId): Promise<Meetings> {
    return await this.meetRepository.findOne(meetId);
  }

  async editMeet(meetId, meet): Promise<UpdateResult> {
    return await this.meetRepository.update(meetId, meet);
  }

  async deleteMeet(meetId): Promise<DeleteResult> {
    return await this.meetRepository.delete(meetId);
  }
}
