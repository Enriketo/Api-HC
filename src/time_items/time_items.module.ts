import { Module } from '@nestjs/common';
import { TimeItemsController } from './time_items.controller';
import { TimeItemsService } from './time_items.service';

@Module({
    controllers: [TimeItemsController],
    providers: [TimeItemsService]
})
export class TimeItemsModule {}
