import { Module } from '@nestjs/common';
import { MeetingsModule } from './meetings.module';
import { MeetingsService } from './meetings.service';
import { MeetingsController } from './meetings.controller';

@Module({
  imports: [MeetingsModule],
  providers: [MeetingsService],
  controllers: [MeetingsController]
})
export class MeetHttpModule {}
