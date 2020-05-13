import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrderEntity } from './order.entity';
import { OrderSubscriber } from './order.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity])],
    exports: [TypeOrmModule],
    controllers: [OrdersController],
    providers: [OrdersService, OrderSubscriber]
})
export class OrdersModule {}
