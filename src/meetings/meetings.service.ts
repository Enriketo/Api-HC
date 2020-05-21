import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection} from 'typeorm';
import { MeetEntity } from './meet.entity';
import { CreateMeetDTO } from './dto/create-meet.dto';
import { MeetClass } from './classes/meet.class';

export type Meet = any;

@Injectable()
export class MeetingsService {
    MeetEntity: any;

    private readonly meetings: Meet[];

    create(meet: CreateMeetDTO): MeetClass {
        this.meetings.push(meet);
        return meet;
    }

    constructor(
        @InjectRepository(MeetEntity)
        private meetingsRepository: Repository<MeetEntity>,
        private connection: Connection,
    ) { }

    getMeetings(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.MeetEntity);
        });
    }
    getMeet(meetID): Promise<any> {
        let id = Number(meetID);
        return new Promise(resolve => {
            const meet = this.MeetEntity.find(meet => meet.id === id);
            if (!meet) {
                throw new HttpException('Meet does not exist!', 404);
            }
            resolve(meet);
        });
    }
    addMeet(meet): Promise<any> {
        return new Promise(resolve => {
            this.MeetEntity.push(meet);
            resolve(this.MeetEntity);
        });
    }
    deleteMeet(meetID): Promise<any> {
        let id = Number(meetID);
        return new Promise(resolve => {
            let index = this.MeetEntity.findIndex(meet => meet.id === id);
            if (index === -1) {
                throw new HttpException('Meet does not exist!', 404);
            }
            this.MeetEntity.splice(1, index);
            resolve(this.MeetEntity);
        });
    }

    findAll(): Promise<MeetEntity[]> {
        return this.meetingsRepository.find();
    }

    findOne(id: string): Promise<MeetEntity> {
        return this.meetingsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.meetingsRepository.delete(id);
    }    async createMany(meetings: MeetEntity[]) {
        const queryRunner = this.connection.createQueryRunner();
             
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(meetings[0]);
          await queryRunner.manager.save(meetings[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(meetings[0]);
            await manager.save(meetings[1]);
          });
      }
}
