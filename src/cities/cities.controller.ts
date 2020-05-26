import { Controller, Get, Post, Body, Res, Param, NotFoundException, HttpStatus, Put, Delete } from '@nestjs/common';
import { Cities } from './city.entity';
import { CitiesService } from './cities.service';
import { CreateCityDto, UpdateCityDto } from './dto/';
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Cities')
@Controller('api/cities')
export class CitiesController {
  constructor(
    private readonly citiesService: CitiesService,
    ) {
  }

  @Post()
  @ApiOperation({
    description: 'Create city',
  })
  @ApiResponse({
    status: 201,
    description: 'City has been created',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async create(@Body() createCity: CreateCityDto) {
    return await this.citiesService.create(createCity);
  }

  @Get()
  @ApiOperation({
    description: 'Get all cities',
  })
  @ApiResponse({
    status: 200,
    description: 'Get all cities',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async findAll(): Promise<Cities[]> {
    return this.citiesService.findAll();
  }

  @Get('id/:cityId')
  @ApiOperation({
    description: 'Get city by id',
  })
  @ApiParam({ name: 'cityId' })
  @ApiResponse({
    status: 200,
    description: 'Get city information',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async getCity(@Res() res, @Param('cityId') cityId) {
    const city = await this.citiesService.findOneById(cityId);
    if (!city) {
      throw new NotFoundException('City does not exist!');
    }
    return res.status(HttpStatus.OK).json(city);
  }

  @Put('id/:cityId')
  @ApiOperation({
    description: 'Update city using id',
  })
  @ApiParam({ name: 'cityId' })
  @ApiResponse({
    status: 200,
    description: 'City has been updated',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async updateCity(
    @Res() res,
    @Param('cityId') cityId: number,
    @Body() updateCityDto: UpdateCityDto) {
    const editedCity = await this.citiesService.editCity(cityId, updateCityDto);
    if (!editedCity) {
      throw new NotFoundException('City does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'City has been successfully updated',
      post: editedCity,
    });
  }

  @Delete('id/:cityId')
  @ApiOperation({
    description: 'Delete city using id',
  })
  @ApiParam({ name: 'cityId' })
  @ApiResponse({
    status: 200,
    description: 'City has been deleted!',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async deleteCity(
    @Res() res,
    @Param('cityId') cityId,
  ) {
    const deletedCity = await this.citiesService.deleteCity(cityId);
    if (!deletedCity) {
      throw new NotFoundException('City does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'City has been deleted!',
      city: deletedCity,
    });
  }
}
