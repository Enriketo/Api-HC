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
  Delete
} from "@nestjs/common";
import { Media } from "./media.entity";
import { MediaService } from "./media.service";
import { CreateMediaDto, UpdateMediaDto } from "./dto/";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("Media")
@Controller("api/media")
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
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
