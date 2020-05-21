import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { CreateMeetDTO } from './dto/create-meet.dto';
import { ApiBearerAuth, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
//import { MeetClass } from './classes/meet.class';
import { MeetEntity } from './meet.entity';

@ApiBearerAuth()
@ApiTags('meetings')
@Controller('meetings')
export class MeetingsController {
    constructor(private meetingsService: MeetingsService) { }

    @Post()
    @ApiOperation({ 
        summary: 'Create meet' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Meet has been created.' 
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Not found.' 
    })
    async create(@Body() createMeetDTO: CreateMeetDTO){
      return this.meetingsService.create(createMeetDTO);
    }

    @Post()
    async addMeet(@Body() createMeetDTO: CreateMeetDTO) {
        const meet = await this.meetingsService.addMeet(createMeetDTO);
        return meet;
    }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: MeetEntity,
    })
    async getMeetings() {
        const meetings = await this.meetingsService.getMeetings();
        return meetings;
    }

    @Get(':meetID')
    async getMeet(@Param('meetID') meetID) {
        const meet = await this.meetingsService.getMeet(meetID);
        return meet;
    }

    @Delete()
    async deleteMeet(@Query() query) {
        const meetings = await this.meetingsService.deleteMeet(query.meetID);
        return meetings;
    }
}
