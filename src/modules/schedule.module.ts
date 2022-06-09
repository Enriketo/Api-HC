import { Module } from "@nestjs/common";
import { ScheduleService } from "../services/schedule.service";
import { ScheduleController } from "../controllers/schedule.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Schedule } from "../entities/schedule.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Schedule])],
  providers: [ScheduleService],
  controllers: [ScheduleController]
})
export class ScheduleModule {}
