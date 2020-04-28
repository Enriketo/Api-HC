import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { ResidencesService } from './residences.service';
import { CreateResidenceDTO } from './dto/create-residence.dto';

@Controller('residences')
export class ResidencesController {
    constructor(private residencesService: ResidencesService) { }

    @Get()
    async getResidences() {
        const residences = await this.residencesService.getResidences();
        return residences;
    }

    @Get(':residenceID')
    async getResidence(@Param('residenceID') residenceID) {
        const residence = await this.residencesService.getResidence(residenceID);
        return residence;
    }

    @Post()
    async addResidence(@Body() createResidenceDTO: CreateResidenceDTO) {
        const residence = await this.residencesService.addResidence(createResidenceDTO);
        return residence;
    }

    @Delete()
    async deleteResidence(@Query() query) {
        const residences = await this.residencesService.deleteResidence(query.residenceID);
        return residences;
    }
}
