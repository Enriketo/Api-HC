import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection} from 'typeorm';
import { ScheduleEntity } from './schedule.entity';
import { SCHEDULE } from '../../mocks/schedule.mock';

@Injectable()
export class ScheduleService {
    schedule = SCHEDULE;
    constructor(
        @InjectRepository(ScheduleEntity)
        private scheduleRepository: Repository<ScheduleEntity>,
        private connection: Connection,
    ) { }

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

    findAll(): Promise<ScheduleEntity[]> {
        return this.scheduleRepository.find();
    }

    findOne(id: string): Promise<ScheduleEntity> {
        return this.scheduleRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.scheduleRepository.delete(id);
    }
    async createMany(schedules: ScheduleEntity[]) {
        const queryRunner = this.connection.createQueryRunner();
             
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(schedules[0]);
          await queryRunner.manager.save(schedules[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(schedules[0]);
            await manager.save(schedules[1]);
          });
      }
}
