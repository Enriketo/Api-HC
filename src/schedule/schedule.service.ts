import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleEntity } from './schedule.entity';
import { SCHEDULE } from '../../mocks/schedule.mock';

@Injectable()
export class ScheduleService {
    schedule = SCHEDULE;

    getSchedule(scheduleID): Promise<any> {
        let id = Number(scheduleID);
        return new Promise(resolve => {
            const schedule = this.schedule.find(schedule => schedule.id === id);
            if (!schedule) {
                throw new HttpException('Schedule does not exist!', 404);
            }
            resolve(schedule);
        });
    }
    addSchedule(schedule): Promise<any> {
        return new Promise(resolve => {
            this.schedule.push(schedule);
            resolve(this.schedule);
        });
    }
    deleteSchedule(scheduleID): Promise<any> {
        let id = Number(scheduleID);
        return new Promise(resolve => {
            let index = this.schedule.findIndex(schedule => schedule.id === id);
            if (index === -1) {
                throw new HttpException('Schedule does not exist!', 404);
            }
            this.schedule.splice(1, index);
            resolve(this.schedule);
        });
    }
    constructor(
        @InjectRepository(ScheduleEntity)
        private scheduleRepository: Repository<ScheduleEntity>,
    ) { }

    findAll(): Promise<ScheduleEntity[]> {
        return this.scheduleRepository.find();
    }

    findOne(id: string): Promise<ScheduleEntity> {
        return this.scheduleRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.scheduleRepository.delete(id);
    }
}
