import { Module } from "@nestjs/common";
import { TimeItemsService } from "../services/time_items.service";
import { TimeItemsController } from "../controllers/time_items.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TimeItems } from "../entities/time_item.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TimeItems])],
  providers: [TimeItemsService],
  controllers: [TimeItemsController]
})
export class TimeItemsModule {}
