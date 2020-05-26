import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './schedule.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class ScheduleService {

  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async create(schedule): Promise<Schedule> {
    console.log(schedule);
    return await this.scheduleRepository.save(schedule);
  }

  async findAll(): Promise<Schedule[]> {
    return await this.scheduleRepository.find();
  }

  async findOneById(scheduleId): Promise<Schedule> {
    return await this.scheduleRepository.findOne(scheduleId);
  }

  async editSchedule(scheduleId, schedule): Promise<UpdateResult> {
    return await this.scheduleRepository.update(scheduleId, schedule);
  }

  async deleteSchedule(scheduleId): Promise<DeleteResult> {
    return await this.scheduleRepository.delete(scheduleId);
  }
}
