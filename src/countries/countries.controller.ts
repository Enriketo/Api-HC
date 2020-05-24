import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CountriesService } from './countries.service';
import { CreateCountryDTO } from './dto/create-country.dto';
import { Countries } from './country.entity';

@ApiBearerAuth()
@ApiTags('countries')
@Controller('countries')
export class CountriesController {
    constructor(private countriesService: CountriesService) { }

    @Post()
    @ApiOperation({
        summary: 'Create user'
    })
    @ApiResponse({
        status: 201,
        description: 'User has been created.'
    })
    @ApiResponse({
        status: 404,
        description: 'Not found.'
    })
    async create(@Body() createCountryDTO: CreateCountryDTO){
      return this.countriesService.create(createCountryDTO);
    }

    @Post()
    async addCountry(@Body() createCountryDTO: CreateCountryDTO) {
        const country = await this.countriesService.addCountry(createCountryDTO);
        return country;
    }

    @Get()
    async getCountries() {
        const countries = await this.countriesService.getCountries();
        return countries;
    }

    @Get(':countryID')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Countries,
    })
    async getCountry(@Param('countryID') countryID) {
        const country = await this.countriesService.getCountry(countryID);
        return country;
    }

    @Delete()
    async deleteCountry(@Query() query) {
        const countries = await this.countriesService.deleteCountry(query.countryID);
        return countries;
    }
}
