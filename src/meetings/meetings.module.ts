import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingsController } from './meetings.controller';
import { MeetingsService } from './meetings.service';
import { MeetEntity } from './meet.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MeetEntity])],
    exports: [TypeOrmModule],
    controllers: [MeetingsController],
    providers: [MeetingsService]
})
export class MeetingsModule {}
