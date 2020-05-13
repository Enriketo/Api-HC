import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingsController } from './meetings.controller';
import { MeetingsService } from './meetings.service';
import { MeetEntity } from './meet.entity';
import { MeetSubscriber } from './meet.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([MeetEntity])],
    exports: [TypeOrmModule],
    controllers: [MeetingsController],
    providers: [MeetingsService, MeetSubscriber]
})
export class MeetingsModule {}
