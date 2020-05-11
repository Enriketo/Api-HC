import { Module } from '@nestjs/common';
import { TimeItemsModule } from './time_items.module';
import { TimeItemsService } from './time_items.service';
import { TimeItemsController } from './time_items.controller';

@Module({
  imports: [TimeItemsModule],
  providers: [TimeItemsService],
  controllers: [TimeItemsController]
})
export class TimeItemHttpModule {}
