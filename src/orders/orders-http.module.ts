import { Module } from '@nestjs/common';
import { OrdersModule } from './orders.module';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [OrdersModule],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrderHttpModule {}
