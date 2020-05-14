import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) { }

    @Get()
    async getOrders() {
        const orders = await this.ordersService.getOrders();
        return orders;
    }

    @Get(':orderID')
    async getOrder(@Param('orderID') orderID) {
        const order = await this.ordersService.getOrder(orderID);
        return order;
    }

    @Post()
    async addOrder(@Body() createOrderDTO: CreateOrderDTO) {
        const order = await this.ordersService.addOrder(createOrderDTO);
        return order;
    }

    @Delete()
    async deleteOrder(@Query() query) {
        const orders = await this.ordersService.deleteOrder(query.orderID);
        return orders;
    }
}
