import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDTO } from './dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
    constructor(private scheduleService: ScheduleService) { }

    @Get(':scheduleID')
    async getSchedule(@Param('scheduleID') scheduleID) {
        const schedule = await this.scheduleService.getSchedule(scheduleID);
        return schedule;
    }

    @Post()
    async addSchedule(@Body() createScheduleDTO: CreateScheduleDTO) {
        const schedule = await this.scheduleService.addSchedule(createScheduleDTO);
        return schedule;
    }

    @Delete()
    async deleteSchedule(@Query() query) {
        const schedule = await this.scheduleService.deleteSchedule(query.scheduleID);
        return schedule;
    }
}
