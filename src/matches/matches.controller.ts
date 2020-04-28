import { Controller, Delete, Post, Get, Param, Body, Query } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { CreateMatchDTO } from './dto/create-match.dto';

@Controller('matches')
export class MatchesController {
    constructor(private citiesService: MatchesService) { }

    @Get()
    async getMatches() {
        const cities = await this.citiesService.getMatches();
        return cities;
    }

    @Get(':matchID')
    async getMatch(@Param('matchID') matchID) {
        const match = await this.citiesService.getMatch(matchID);
        return match;
    }

    @Post()
    async addMatch(@Body() createMatchDTO: CreateMatchDTO) {
        const match = await this.citiesService.addMatch(createMatchDTO);
        return match;
    }

    @Delete()
    async deleteMatch(@Query() query) {
        const cities = await this.citiesService.deleteMatch(query.matchID);
        return cities;
    }
}
