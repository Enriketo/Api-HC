import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection} from 'typeorm';
import { TimeItemEntity } from './time_item.entity';
import { TIME_ITEMS } from '../../mocks/time-items.mock';

@Injectable()
export class TimeItemsService {
    time_items = TIME_ITEMS;
    constructor(
        @InjectRepository(TimeItemEntity)
        private TimeItemsRepository: Repository<TimeItemEntity>,
        private connection: Connection,
    ) {}

    getTimeItems(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.time_items);
        });
    }
    getTimeItem(time_itemID): Promise<any> {
        let id = Number(time_itemID);
        return new Promise(resolve => {
            const time_item = this.time_items.find(time_item => time_item.id === id);
            if (!time_item) {
                throw new HttpException('Time items does not exist!', 404);
            }
            resolve(time_item);
        });
    }
    addTimeItem(time_item): Promise<any> {
        return new Promise(resolve => {
            this.time_items.push(time_item);
            resolve(this.time_items);
        });
    }
    deleteTimeItem(time_itemID): Promise<any> {
        let id = Number(time_itemID);
        return new Promise(resolve => {
            let index = this.time_items.findIndex(time_item => time_item.id === id);
            if (index === -1) {
                throw new HttpException('Time items does not exist!', 404);
            }
            this.time_items.splice(1, index);
            resolve(this.time_items);
        });
    }


    findAll(): Promise<TimeItemEntity[]> {
        return this.TimeItemsRepository.find();
    }

    findOne(id: string): Promise<TimeItemEntity> {
        return this.TimeItemsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.TimeItemsRepository.delete(id);
    }
    async createMany(time_items: TimeItemEntity[]) {
        const queryRunner = this.connection.createQueryRunner();
             
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(time_items[0]);
          await queryRunner.manager.save(time_items[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(time_items[0]);
            await manager.save(time_items[1]);
          });
      }
}
