import { Module } from '@nestjs/common';
import { ScheduleModule } from './schedule.module';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';

@Module({
  imports: [ScheduleModule],
  providers: [ScheduleService],
  controllers: [ScheduleController]
})
export class ScheduleHttpModule {}
