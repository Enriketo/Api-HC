import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDTO } from './dto/create-city.dto';

@Controller('cities')
export class CitiesController {
    constructor(private citiesService: CitiesService) { }

    @Get()
    async getCities() {
        const cities = await this.citiesService.getCities();
        return cities;
    }

    @Get(':cityID')
    async getCity(@Param('cityID') cityID) {
        const city = await this.citiesService.getCity(cityID);
        return city;
    }

    @Post()
    async addCity(@Body() createCityDTO: CreateCityDTO) {
        const city = await this.citiesService.addCity(createCityDTO);
        return city;
    }

    @Delete()
    async deleteCity(@Query() query) {
        const cities = await this.citiesService.deleteCity(query.cityID);
        return cities;
    }
}