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
import { States } from "./state.entity";
import { StatesService } from "./states.service";
import { CreateStateDto, UpdateStateDto } from "./dto/";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { RolesGuard } from "../auth/guards/roles.guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags("States")
@Controller("api/states")
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Create state"
  })
  @ApiResponse({
    status: 201,
    description: "State has been created"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async create(@Body() createState: CreateStateDto) {
    return await this.statesService.create(createState);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  async index(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<States>> {
    limit = limit > 100 ? 100 : limit;
    return this.statesService.paginate({
      page,
      limit,
      route: `/api/states`,
    });
  }
  @ApiOperation({
    description: "Get all states"
  })
  @ApiResponse({
    status: 200,
    description: "Get all states"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async findAll(): Promise<States[]> {
    return this.statesService.findAll();
  }

  @Get("id/:stateId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Get state by id"
  })
  @ApiParam({ name: "stateId" })
  @ApiResponse({
    status: 200,
    description: "Get state information"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async getState(@Res() res, @Param("stateId") stateId) {
    const state = await this.statesService.findOneById(stateId);
    if (!state) {
      throw new NotFoundException("State does not exist!");
    }
    return res.status(HttpStatus.OK).json(state);
  }

  @Put("id/:stateId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Update state using id"
  })
  @ApiParam({ name: "stateId" })
  @ApiResponse({
    status: 200,
    description: "State has been updated"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async updateState(
    @Res() res,
    @Param("stateId") stateId: number,
    @Body() updateStateDto: UpdateStateDto
  ) {
    const editedState = await this.statesService.editState(
      stateId,
      updateStateDto
    );
    if (!editedState) {
      throw new NotFoundException("State does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "State has been successfully updated",
      post: editedState
    });
  }

  @Delete("id/:stateId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Delete state using id"
  })
  @ApiParam({ name: "stateId" })
  @ApiResponse({
    status: 200,
    description: "State has been deleted!"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async deleteState(@Res() res, @Param("stateId") stateId) {
    const deletedState = await this.statesService.deleteState(stateId);
    if (!deletedState) {
      throw new NotFoundException("State does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "State has been deleted!",
      state: deletedState
    });
  }
}
