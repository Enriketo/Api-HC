import { Module } from "@nestjs/common";
import { MeetingsService } from "../services/meetings.service";
import { MeetingsController } from "../controllers/meetings.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Meetings } from "../entities/meet.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Meetings])],
  providers: [MeetingsService],
  controllers: [MeetingsController]
})
export class MeetingsModule {}
