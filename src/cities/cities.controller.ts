import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CitiesService } from './cities.service';
import { CreateCityDTO } from './dto/create-city.dto';
import { CityEntity } from './city.entity';

@ApiBearerAuth()
@ApiTags('cities')
@Controller('cities')
export class CitiesController {
    constructor(private citiesService: CitiesService) { }

    @Post()
    @ApiOperation({ 
        summary: 'Create city' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'City has been created.' 
    })
    @ApiResponse({ 
        status: 404, 
        description: 'Not found.' 
    })
    async create(@Body() createCityDto: CreateCityDTO){
      return this.citiesService.create(createCityDto);
    }
    
    @Post()
    async addCity(@Body() createCityDTO: CreateCityDTO) {
        const city = await this.citiesService.addCity(createCityDTO);
        return city;
    }

    @Get()
    async getCities() {
        const cities = await this.citiesService.getCities();
        return cities;
    }

    @Get(':cityID')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: CityEntity,
    })
    async getCity(@Param('cityID') cityID) {
        const city = await this.citiesService.getCity(cityID);
        return city;
    }

    @Delete()
    async deleteCity(@Query() query) {
        const cities = await this.citiesService.deleteCity(query.cityID);
        return cities;
    }
}