import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDTO } from './dto/create-country.dto';


@Controller('countries')
export class CountriesController {
    constructor(private countriesService: CountriesService) { }

    @Get()
    async getCountries() {
        const countries = await this.countriesService.getCountries();
        return countries;
    }

    @Get(':countryID')
    async getCountry(@Param('countryID') countryID) {
        const country = await this.countriesService.getCountry(countryID);
        return country;
    }

    @Post()
    async addCountry(@Body() createCountryDTO: CreateCountryDTO) {
        const country = await this.countriesService.addCountry(createCountryDTO);
        return country;
    }

    @Delete()
    async deleteCountry(@Query() query) {
        const countries = await this.countriesService.deleteCountry(query.countryID);
        return countries;
    }
}