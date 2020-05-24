import { Controller, Get, Post, Body, Res, Param, NotFoundException, HttpStatus, Put, Query, Delete } from '@nestjs/common';
import { Countries } from './country.entity';
import { CountriesService } from './countries.service';
import { CreateCountryDto, UpdateCountryDto } from './dto/';
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Countries')
@Controller('api/countries')
export class CountriesController {
  constructor(
    private readonly countriesService: CountriesService,
    ) {
  }

  @Post()
  @ApiOperation({
    description: 'Create country',
  })
  @ApiResponse({
    status: 201,
    description: 'Country has been created',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async create(@Body() createCountry: CreateCountryDto) {
    return await this.countriesService.create(createCountry);
  }

  @Get()
  @ApiOperation({
    description: 'Get all countries',
  })
  @ApiResponse({
    status: 200,
    description: 'Get all countries',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async findAll(): Promise<Countries[]> {
    return this.countriesService.findAll();
  }

  @Get('id/:countryId')
  @ApiOperation({
    description: 'Get country by id',
  })
  @ApiParam({ name: 'countryId' })
  @ApiResponse({
    status: 200,
    description: 'Get country information',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async getCountry(@Res() res, @Param('countryId') countryId) {
    const country = await this.countriesService.findOneById(countryId);
    if (!country) {
      throw new NotFoundException('Country does not exist!');
    }
    return res.status(HttpStatus.OK).json(country);
  }

  @Put('id/:countryId')
  @ApiOperation({
    description: 'Update country using id',
  })
  @ApiParam({ name: 'countryId' })
  @ApiResponse({
    status: 200,
    description: 'Country has been updated',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async updateCountry(
    @Res() res,
    @Param('countryId') countryId: number,
    @Body() updateCountryDto: UpdateCountryDto) {
    const editedCountry = await this.countriesService.editCountry(countryId, updateCountryDto);
    if (!editedCountry) {
      throw new NotFoundException('Country does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Country has been successfully updated',
      post: editedCountry,
    });
  }

  @Delete('id/:countryId')
  @ApiOperation({
    description: 'Delete country using id',
  })
  @ApiParam({ name: 'countryId' })
  @ApiResponse({
    status: 200,
    description: 'Country has been deleted!',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async deleteCountry(
    @Res() res,
    @Param('countryId') countryId,
  ) {
    const deletedCountry = await this.countriesService.deleteCountry(countryId);
    if (!deletedCountry) {
      throw new NotFoundException('Country does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Country has been deleted!',
      country: deletedCountry,
    });
  }
}
