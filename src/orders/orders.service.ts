import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection} from 'typeorm';
import { OrderEntity } from './order.entity';
//import { ORDERS } from '../../mocks/orders.mock';

@Injectable()
export class OrdersService {
    OrderEntity: any;
    constructor(
        @InjectRepository(OrderEntity)
        private ordersRepository: Repository<OrderEntity>,
        private connection: Connection,
    ) { }

    getOrders(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.OrderEntity);
        });
    }
    getOrder(orderID): Promise<any> {
        let id = Number(orderID);
        return new Promise(resolve => {
            const order = this.OrderEntity.find(order => order.id === id);
            if (!order) {
                throw new HttpException('Order does not exist!', 404);
            }
            resolve(order);
        });
    }
    addOrder(order): Promise<any> {
        return new Promise(resolve => {
            this.OrderEntity.push(order);
            resolve(this.OrderEntity);
        });
    }
    deleteOrder(orderID): Promise<any> {
        let id = Number(orderID);
        return new Promise(resolve => {
            let index = this.OrderEntity.findIndex(order => order.id === id);
            if (index === -1) {
                throw new HttpException('Order does not exist!', 404);
            }
            this.OrderEntity.splice(1, index);
            resolve(this.OrderEntity);
        });
    }

    findAll(): Promise<OrderEntity[]> {
        return this.ordersRepository.find();
    }

    findOne(id: string): Promise<OrderEntity> {
        return this.ordersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.ordersRepository.delete(id);
    }
    async createMany(orders: OrderEntity[]) {
        const queryRunner = this.connection.createQueryRunner();
             
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(orders[0]);
          await queryRunner.manager.save(orders[1]);
      
          await queryRunner.commitTransaction();
        } catch (err) {
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(orders[0]);
            await manager.save(orders[1]);
          });
      }
}
