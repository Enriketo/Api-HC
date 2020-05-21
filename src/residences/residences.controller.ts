import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { ResidencesService } from './residences.service';
import { CreateResidenceDTO } from './dto/create-residence.dto';
import { ApiResponse, ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ResidenceEntity } from './residence.entity';
import { ResidenceClass } from './classes/residence.class';

@ApiBearerAuth()
@ApiTags('residences')
@Controller('residences')
export class ResidencesController {
    constructor(private residencesService: ResidencesService) { }
    
    @Post()
    @ApiOperation({ 
        summary: 'Create residence' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Residence has been created.' 
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Not found.' 
    })
    async create(@Body() createResidenceDTO: CreateResidenceDTO): Promise<ResidenceClass> {
      return this.residencesService.create(createResidenceDTO);
    }
    
    @Post()
    async addResidence(@Body() createResidenceDTO: CreateResidenceDTO) {
        const residence = await this.residencesService.addResidence(createResidenceDTO);
        return residence;
    }

    @Get()
    async getResidences() {
        const residences = await this.residencesService.getResidences();
        return residences;
    }

    @Get(':residenceID')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: ResidenceEntity,
    })
    async getResidence(@Param('residenceID') residenceID) {
        const residence = await this.residencesService.getResidence(residenceID);
        return residence;
    }

    @Delete()
    async deleteResidence(@Query() query) {
        const residences = await this.residencesService.deleteResidence(query.residenceID);
        return residences;
    }
}
