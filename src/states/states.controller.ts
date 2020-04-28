import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { StatesService } from './states.service';
import { CreateStateDTO } from './dto/create-state.dto';

@Controller('states')
export class StatesController {
    constructor(private statesService: StatesService) { }

    @Get()
    async getStates() {
        const states = await this.statesService.getStates();
        return states;
    }

    @Get(':stateID')
    async getState(@Param('stateID') stateID) {
        const state = await this.statesService.getState(stateID);
        return state;
    }

    @Post()
    async addState(@Body() createStateDTO: CreateStateDTO) {
        const state = await this.statesService.addState(createStateDTO);
        return state;
    }

    @Delete()
    async deleteState(@Query() query) {
        const states = await this.statesService.deleteState(query.stateID);
        return states;
    }
}
