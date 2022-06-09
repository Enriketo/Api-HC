import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Param,
  NotFoundException,
  HttpStatus,
  Put,
  Delete,
  UseGuards,
  Query
} from "@nestjs/common";
import { Orders } from "../entities/order.entity";
import { OrdersService } from "../services/orders.service";
import { CreateOrderDto } from "../dtos/create-order.dto";
import { UpdateOrderDto } from "../dtos/update-order.dto";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { RolesGuard } from "../auth/guards/roles.guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags("Orders")
@Controller("api/orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Create order"
  })
  @ApiResponse({
    status: 201,
    description: "Order has been created"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async create(@Body() createOrder: CreateOrderDto) {
    return await this.ordersService.create(createOrder);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  async index(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<Orders>> {
    limit = limit > 100 ? 100 : limit;
    return this.ordersService.paginate({
      page,
      limit,
      route: `/api/orders`,
    });
  }
  @ApiOperation({
    description: "Get all orders"
  })
  @ApiResponse({
    status: 200,
    description: "Get all orders"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async findAll(): Promise<Orders[]> {
    return this.ordersService.findAll();
  }

  @Get("id/:orderId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Get order by id"
  })
  @ApiParam({ name: "orderId" })
  @ApiResponse({
    status: 200,
    description: "Get order information"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async getOrder(@Res() res, @Param("orderId") orderId) {
    const order = await this.ordersService.findOneById(orderId);
    if (!order) {
      throw new NotFoundException("Order does not exist!");
    }
    return res.status(HttpStatus.OK).json(order);
  }

  @Put("id/:orderId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Update order using id"
  })
  @ApiParam({ name: "orderId" })
  @ApiResponse({
    status: 200,
    description: "Order has been updated"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async updateOrder(
    @Res() res,
    @Param("orderId") orderId: number,
    @Body() updateOrderDto: UpdateOrderDto
  ) {
    const editedOrder = await this.ordersService.editOrder(
      orderId,
      updateOrderDto
    );
    if (!editedOrder) {
      throw new NotFoundException("Order does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Order has been successfully updated",
      post: editedOrder
    });
  }

  @Delete("id/:orderId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Delete order using id"
  })
  @ApiParam({ name: "orderId" })
  @ApiResponse({
    status: 200,
    description: "Order has been deleted!"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async deleteOrder(@Res() res, @Param("orderId") orderId) {
    const deletedOrder = await this.ordersService.deleteOrder(orderId);
    if (!deletedOrder) {
      throw new NotFoundException("Order does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Order has been deleted!",
      order: deletedOrder
    });
  }
}
