import { Controller, Delete, Post, Get, Param, Body, Query } from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MatchesService } from './matches.service';
import { CreateMatchDTO } from './dto/create-match.dto';
import { MatchEntity } from './match.entity';

@ApiBearerAuth()
@ApiTags('matches')
@Controller('matches')
export class MatchesController {
    constructor(private matchesService: MatchesService) { }

    @Post()
    @ApiOperation({ 
        summary: 'Create match' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Match has been created.' 
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Not found.' 
    })
    async create(@Body() createMatchDTO: CreateMatchDTO){
      return this.matchesService.create(createMatchDTO);
    }

    @Post()
    async addMatch(@Body() createMatchDTO: CreateMatchDTO) {
        const match = await this.matchesService.addMatch(createMatchDTO);
        return match;
    }

    @Get()
    async getMatches() {
        const cities = await this.matchesService.getMatches();
        return cities;
    }

    @Get(':matchID')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: MatchEntity,
    })
    async getMatch(@Param('matchID') matchID) {
        const match = await this.matchesService.getMatch(matchID);
        return match;
    }

    @Delete()
    async deleteMatch(@Query() query) {
        const cities = await this.matchesService.deleteMatch(query.matchID);
        return cities;
    }
}
