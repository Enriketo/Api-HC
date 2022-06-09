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
import { TimeItems } from "../entities/time_item.entity";
import { TimeItemsService } from "../services/time_items.service";
import { CreateTimeItemDto } from "../dtos/create-timeItem.dto";
import { UpdateTimeItemDto } from "../dtos/update-timeItem.dto";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { RolesGuard } from "../auth/guards/roles.guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags("TimeItems")
@Controller("api/TimeItems")
export class TimeItemsController {
  constructor(private readonly timeItemsService: TimeItemsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Create time item"
  })
  @ApiResponse({
    status: 201,
    description: "Time item has been created"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async create(@Body() createTimeItem: CreateTimeItemDto) {
    return await this.timeItemsService.create(createTimeItem);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  async index(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<TimeItems>> {
    limit = limit > 100 ? 100 : limit;
    return this.timeItemsService.paginate({
      page,
      limit,
      route: `/api/timeItems`,
    });
  }
  @ApiOperation({
    description: "Get all time items"
  })
  @ApiResponse({
    status: 200,
    description: "Get all time items"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async findAll(): Promise<TimeItems[]> {
    return this.timeItemsService.findAll();
  }

  @Get("id/:timeItemId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Get time item by id"
  })
  @ApiParam({ name: "timeItemId" })
  @ApiResponse({
    status: 200,
    description: "Get time item information"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async getTimeItem(@Res() res, @Param("timeItemId") timeItemId) {
    const timeItem = await this.timeItemsService.findOneById(timeItemId);
    if (!timeItem) {
      throw new NotFoundException("Time item does not exist!");
    }
    return res.status(HttpStatus.OK).json(timeItem);
  }

  @Put("id/:timeItemId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Update time item using id"
  })
  @ApiParam({ name: "timeItemId" })
  @ApiResponse({
    status: 200,
    description: "Time item has been updated"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async updateTimeItem(
    @Res() res,
    @Param("timeItemId") timeItemId: number,
    @Body() updateTimeItemDto: UpdateTimeItemDto
  ) {
    const editedTimeItem = await this.timeItemsService.editTimeItem(
      timeItemId,
      updateTimeItemDto
    );
    if (!editedTimeItem) {
      throw new NotFoundException("Time item does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Time item has been successfully updated",
      post: editedTimeItem
    });
  }

  @Delete("id/:timeItemId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Delete time item using id"
  })
  @ApiParam({ name: "timeItemId" })
  @ApiResponse({
    status: 200,
    description: "Time item has been deleted!"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async deleteTimeItem(@Res() res, @Param("timeItemId") timeItemId) {
    const deletedTimeItem = await this.timeItemsService.deleteTimeItem(
      timeItemId
    );
    if (!deletedTimeItem) {
      throw new NotFoundException("Time item does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Time item has been deleted!",
      timeItem: deletedTimeItem
    });
  }
}
