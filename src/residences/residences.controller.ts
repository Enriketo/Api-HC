import { Controller, Get, Post, Body, Res, Param, NotFoundException, HttpStatus, Put, Delete } from '@nestjs/common';
import { Residences } from './residence.entity';
import { ResidencesService } from './residences.service';
import { CreateResidenceDto, UpdateResidenceDto } from './dto/';
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Residences')
@Controller('api/residences')
export class ResidencesController {
  constructor(
    private readonly residencesService: ResidencesService,
    ) {
  }

  @Post()
  @ApiOperation({
    description: 'Create residence',
  })
  @ApiResponse({
    status: 201,
    description: 'Residence has been created',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async create(@Body() createResidence: CreateResidenceDto) {
    return await this.residencesService.create(createResidence);
  }

  @Get()
  @ApiOperation({
    description: 'Get all residences',
  })
  @ApiResponse({
    status: 200,
    description: 'Get all residences',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async findAll(): Promise<Residences[]> {
    return this.residencesService.findAll();
  }

  @Get('id/:residenceId')
  @ApiOperation({
    description: 'Get residence by id',
  })
  @ApiParam({ name: 'residenceId' })
  @ApiResponse({
    status: 200,
    description: 'Get residence information',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async getResidence(@Res() res, @Param('residenceId') residenceId) {
    const residence = await this.residencesService.findOneById(residenceId);
    if (!residence) {
      throw new NotFoundException('Residence does not exist!');
    }
    return res.status(HttpStatus.OK).json(residence);
  }

  @Put('id/:residenceId')
  @ApiOperation({
    description: 'Update residence using id',
  })
  @ApiParam({ name: 'residenceId' })
  @ApiResponse({
    status: 200,
    description: 'Residence has been updated',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async updateResidence(
    @Res() res,
    @Param('residenceId') residenceId: number,
    @Body() updateResidenceDto: UpdateResidenceDto) {
    const editedResidence = await this.residencesService.editResidence(residenceId, updateResidenceDto);
    if (!editedResidence) {
      throw new NotFoundException('Residence does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Residence has been successfully updated',
      post: editedResidence,
    });
  }

  @Delete('id/:residenceId')
  @ApiOperation({
    description: 'Delete residence using id',
  })
  @ApiParam({ name: 'residenceId' })
  @ApiResponse({
    status: 200,
    description: 'Residence has been deleted!',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async deleteResidence(
    @Res() res,
    @Param('residenceId') residenceId,
  ) {
    const deletedResidence = await this.residencesService.deleteResidence(residenceId);
    if (!deletedResidence) {
      throw new NotFoundException('Residence does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Residence has been deleted!',
      residence: deletedResidence,
    });
  }
}
