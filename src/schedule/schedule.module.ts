import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { ScheduleEntity } from './schedule.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ScheduleEntity])],
    exports: [TypeOrmModule],
    controllers: [ScheduleController],
    providers: [ScheduleService]
})
export class ScheduleModule {}
