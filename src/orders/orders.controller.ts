import { Controller, Get, Post, Body, Res, Param, NotFoundException, HttpStatus, Put, Delete } from '@nestjs/common';
import { Orders } from './order.entity';
import { OrdersService } from './orders.service';
import { CreateOrderDto, UpdateOrderDto } from './dto/';
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('api/orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    ) {
  }

  @Post()
  @ApiOperation({
    description: 'Create order',
  })
  @ApiResponse({
    status: 201,
    description: 'Order has been created',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async create(@Body() createOrder: CreateOrderDto) {
    return await this.ordersService.create(createOrder);
  }

  @Get()
  @ApiOperation({
    description: 'Get all orders',
  })
  @ApiResponse({
    status: 200,
    description: 'Get all orders',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async findAll(): Promise<Orders[]> {
    return this.ordersService.findAll();
  }

  @Get('id/:orderId')
  @ApiOperation({
    description: 'Get order by id',
  })
  @ApiParam({ name: 'orderId' })
  @ApiResponse({
    status: 200,
    description: 'Get order information',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async getOrder(@Res() res, @Param('orderId') orderId) {
    const order = await this.ordersService.findOneById(orderId);
    if (!order) {
      throw new NotFoundException('Order does not exist!');
    }
    return res.status(HttpStatus.OK).json(order);
  }

  @Put('id/:orderId')
  @ApiOperation({
    description: 'Update order using id',
  })
  @ApiParam({ name: 'orderId' })
  @ApiResponse({
    status: 200,
    description: 'Order has been updated',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async updateOrder(
    @Res() res,
    @Param('orderId') orderId: number,
    @Body() updateOrderDto: UpdateOrderDto) {
    const editedOrder = await this.ordersService.editOrder(orderId, updateOrderDto);
    if (!editedOrder) {
      throw new NotFoundException('Order does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Order has been successfully updated',
      post: editedOrder,
    });
  }

  @Delete('id/:orderId')
  @ApiOperation({
    description: 'Delete order using id',
  })
  @ApiParam({ name: 'orderId' })
  @ApiResponse({
    status: 200,
    description: 'Order has been deleted!',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async deleteOrder(
    @Res() res,
    @Param('orderId') orderId,
  ) {
    const deletedOrder = await this.ordersService.deleteOrder(orderId);
    if (!deletedOrder) {
      throw new NotFoundException('Order does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Order has been deleted!',
      order: deletedOrder,
    });
  }
}
