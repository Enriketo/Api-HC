import { Module } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { MeetingsController } from './meetings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meetings } from './meet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meetings])],
  providers: [MeetingsService],
  controllers: [MeetingsController],
})
export class MeetingsModule {}
