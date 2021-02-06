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
  Delete
} from "@nestjs/common";
import { Schedule } from "./schedule.entity";
import { ScheduleService } from "./schedule.service";
import { CreateScheduleDto, UpdateScheduleDto } from "./dto/";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("Schedule")
@Controller("api/schedule")
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  @ApiOperation({
    description: "Create schedule"
  })
  @ApiResponse({
    status: 201,
    description: "Schedule has been created"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async create(@Body() createSchedule: CreateScheduleDto) {
    return await this.scheduleService.create(createSchedule);
  }

  @Get()
  @ApiOperation({
    description: "Get all schedule"
  })
  @ApiResponse({
    status: 200,
    description: "Get all schedule"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async findAll(): Promise<Schedule[]> {
    return this.scheduleService.findAll();
  }

  @Get("id/:scheduleId")
  @ApiOperation({
    description: "Get schedule by id"
  })
  @ApiParam({ name: "scheduleId" })
  @ApiResponse({
    status: 200,
    description: "Get schedule information"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async getSchedule(@Res() res, @Param("scheduleId") scheduleId) {
    const schedule = await this.scheduleService.findOneById(scheduleId);
    if (!schedule) {
      throw new NotFoundException("Schedule does not exist!");
    }
    return res.status(HttpStatus.OK).json(schedule);
  }

  @Put("id/:scheduleId")
  @ApiOperation({
    description: "Update schedule using id"
  })
  @ApiParam({ name: "scheduleId" })
  @ApiResponse({
    status: 200,
    description: "Schedule has been updated"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async updateSchedule(
    @Res() res,
    @Param("scheduleId") scheduleId: number,
    @Body() updateScheduleDto: UpdateScheduleDto
  ) {
    const editedSchedule = await this.scheduleService.editSchedule(
      scheduleId,
      updateScheduleDto
    );
    if (!editedSchedule) {
      throw new NotFoundException("Schedule does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Schedule has been successfully updated",
      post: editedSchedule
    });
  }

  @Delete("id/:scheduleId")
  @ApiOperation({
    description: "Delete schedule using id"
  })
  @ApiParam({ name: "scheduleId" })
  @ApiResponse({
    status: 200,
    description: "Schedule has been deleted!"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async deleteSchedule(@Res() res, @Param("scheduleId") scheduleId) {
    const deletedSchedule = await this.scheduleService.deleteSchedule(
      scheduleId
    );
    if (!deletedSchedule) {
      throw new NotFoundException("Schedule does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Schedule has been deleted!",
      schedule: deletedSchedule
    });
  }
}
