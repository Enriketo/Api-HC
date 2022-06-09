import { Module } from "@nestjs/common";
import { OrdersService } from "../services/orders.service";
import { OrdersController } from "../controllers/orders.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Orders } from "../entities/order.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
