import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { ApiResponse, ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { OrderClass } from './classes/order.class';
import { OrderEntity } from './order.entity';

@ApiBearerAuth()
@ApiTags('orders')
@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) { }

    @Post()
    @ApiOperation({ 
        summary: 'Create order' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Order has been created.' 
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Not found.' 
    })
    async create(@Body() createUserDto: CreateOrderDTO): Promise<OrderClass> {
      return this.ordersService.create(createUserDto);
    }

   
    @Post()
    async addOrder(@Body() createOrderDTO: CreateOrderDTO) {
        const order = await this.ordersService.addOrder(createOrderDTO);
        return order;
    }

    @Get()
    async getOrders() {
        const orders = await this.ordersService.getOrders();
        return orders;
    }

    @Get(':orderID')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: OrderEntity,
    })
    async getOrder(@Param('orderID') orderID) {
        const order = await this.ordersService.getOrder(orderID);
        return order;
    }

    @Delete()
    async deleteOrder(@Query() query) {
        const orders = await this.ordersService.deleteOrder(query.orderID);
        return orders;
    }
}
