import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDTO } from './dto/create-schedule.dto';
import { ScheduleClass } from './classes/schedule.class';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ScheduleEntity } from './schedule.entity'

@ApiBearerAuth()
@ApiTags('schedule')
@Controller('schedule')
export class ScheduleController {
    constructor(private scheduleService: ScheduleService) { }

    @Post()
    @ApiOperation({ 
        summary: 'Create schedule' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Schedule has been created.' 
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Not found.' 
    })
    async create(@Body() createScheduleDTO: CreateScheduleDTO): Promise<ScheduleClass> {
      return this.scheduleService.create(createScheduleDTO);
    }
    
    @Post()
    async addSchedule(@Body() createScheduleDTO: CreateScheduleDTO) {
        const schedule = await this.scheduleService.addSchedule(createScheduleDTO);
        return schedule;
    }

    @Get(':scheduleID')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: ScheduleEntity,
    })
    async getSchedule(@Param('scheduleID') scheduleID) {
        const schedule = await this.scheduleService.getSchedule(scheduleID);
        return schedule;
    }

    @Delete()
    async deleteSchedule(@Query() query) {
        const schedule = await this.scheduleService.deleteSchedule(query.scheduleID);
        return schedule;
    }
}
