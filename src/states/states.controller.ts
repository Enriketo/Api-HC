import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { StatesService } from './states.service';
import { CreateStateDTO } from './dto/create-state.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StateClass } from './classes/state.class';
import { StateEntity } from './state.entity';

@ApiBearerAuth()
@ApiTags('states')
@Controller('states')
export class StatesController {
    constructor(private statesService: StatesService) { }

    @Post()
    @ApiOperation({ 
        summary: 'Create state' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'State has been created.' 
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Not found.' 
    })
    async create(@Body() CreateStateDTO: CreateStateDTO){
      return this.statesService.create(CreateStateDTO);
    }
 
    @Post()
    async addState(@Body() createStateDTO: CreateStateDTO) {
        const state = await this.statesService.addState(createStateDTO);
        return state;
    }

    @Get()
    async getStates() {
        const states = await this.statesService.getStates();
        return states;
    }

    @Get(':stateID')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: StateEntity,
    })
    async getState(@Param('stateID') stateID) {
        const state = await this.statesService.getState(stateID);
        return state;
    }

    @Delete()
    async deleteState(@Query() query) {
        const states = await this.statesService.deleteState(query.stateID);
        return states;
    }
}
