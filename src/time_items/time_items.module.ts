import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeItemsController } from './time_items.controller';
import { TimeItemsService } from './time_items.service';
import { TimeItemEntity } from './time_item.entity';
import { TimeItemSubscriber } from './time_items.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([TimeItemEntity])],
    exports: [TypeOrmModule],
    controllers: [TimeItemsController],
    providers: [TimeItemsService, TimeItemSubscriber]
})
export class TimeItemsModule {}
