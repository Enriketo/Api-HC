import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meetings } from './meet.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class MeetingsService {

  constructor(
    @InjectRepository(Meetings)
    private meetRepository: Repository<Meetings>,
  ) {}

  async create(meet): Promise<Meetings> {
    console.log(meet);
    return await this.meetRepository.save(meet);
  }

  async findAll(): Promise<Meetings[]> {
    return await this.meetRepository.find();
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
