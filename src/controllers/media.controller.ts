import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Param,
  NotFoundException,
  HttpStatus,
  Put,
  Delete,
  UseGuards,
  Query
} from "@nestjs/common";
import { Media } from "../entities/media.entity";
import { MediaService } from "../services/media.service";
import { CreateMediaDto, UpdateMediaDto } from "../dtos/media-index";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { RolesGuard } from "../auth/guards/roles.guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags("Media")
@Controller("api/media")
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Create media"
  })
  @ApiResponse({
    status: 201,
    description: "Media has been created"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async create(@Body() createMedia: CreateMediaDto) {
    return await this.mediaService.create(createMedia);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  async index(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<Media>> {
    limit = limit > 100 ? 100 : limit;
    return this.mediaService.paginate({
      page,
      limit,
      route: `/api/media`,
    });
  }
  @ApiOperation({
    description: "Get all media"
  })
  @ApiResponse({
    status: 200,
    description: "Get all media"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async findAll(): Promise<Media[]> {
    return this.mediaService.findAll();
  }

  @Get("id/:mediaId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Get media by id"
  })
  @ApiParam({ name: "mediaId" })
  @ApiResponse({
    status: 200,
    description: "Get media information"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async getMedia(@Res() res, @Param("mediaId") mediaId) {
    const media = await this.mediaService.findOneById(mediaId);
    if (!media) {
      throw new NotFoundException("Media does not exist!");
    }
    return res.status(HttpStatus.OK).json(media);
  }

  @Put("id/:mediaId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Update media using id"
  })
  @ApiParam({ name: "mediaId" })
  @ApiResponse({
    status: 200,
    description: "Media has been updated"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async updateMedia(
    @Res() res,
    @Param("mediaId") mediaId: number,
    @Body() updateMediaDto: UpdateMediaDto
  ) {
    const editedMedia = await this.mediaService.editMedia(
      mediaId,
      updateMediaDto
    );
    if (!editedMedia) {
      throw new NotFoundException("Media does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Media has been successfully updated",
      post: editedMedia
    });
  }

  @Delete("id/:mediaId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Delete media using id"
  })
  @ApiParam({ name: "mediaId" })
  @ApiResponse({
    status: 200,
    description: "Media has been deleted!"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async deleteMedia(@Res() res, @Param("mediaId") mediaId) {
    const deletedMedia = await this.mediaService.deleteMedia(mediaId);
    if (!deletedMedia) {
      throw new NotFoundException("Media does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Media has been deleted!",
      media: deletedMedia
    });
  }
}
