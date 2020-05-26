import { Module } from '@nestjs/common';
import { TimeItemsService } from './time_items.service';
import { TimeItemsController } from './time_items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeItems } from './time_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimeItems])],
  providers: [TimeItemsService],
  controllers: [TimeItemsController],
})
export class TimeItemsModule {}
