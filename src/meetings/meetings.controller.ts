import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { CreateMeetDTO } from './dto/create-meet.dto';

@Controller('meetings')
export class MeetingsController {
    constructor(private meetingsService: MeetingsService) { }

    @Get()
    async getMeetings() {
        const meetings = await this.meetingsService.getMeetings();
        return meetings;
    }

    @Get(':meetID')
    async getMeet(@Param('meetID') meetID) {
        const meet = await this.meetingsService.getMeet(meetID);
        return meet;
    }

    @Post()
    async addMeet(@Body() createMeetDTO: CreateMeetDTO) {
        const meet = await this.meetingsService.addMeet(createMeetDTO);
        return meet;
    }

    @Delete()
    async deleteMeet(@Query() query) {
        const meetings = await this.meetingsService.deleteMeet(query.meetID);
        return meetings;
    }
}
