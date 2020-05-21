import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDTO } from './dto/create-media.dto';
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MediaEntity } from './media.entity';

@ApiBearerAuth()
@ApiTags('media')
@Controller('media')
export class MediaController {
    constructor(private mediaService: MediaService) { }

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
    async create(@Body() createUserDto: CreateMediaDTO){
      return this.mediaService.create(createUserDto);
    }
    
    @Post()
    async addMedia(@Body() createMediaDTO: CreateMediaDTO) {
        const media = await this.mediaService.addMedia(createMediaDTO);
        return media;
    }

    @Get(':mediaID')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: MediaEntity,
    })
    async getMedia(@Param('mediaID') mediaID) {
        const media = await this.mediaService.getMedia(mediaID);
        return media;
    }

    @Delete()
    async deleteMedia(@Query() query) {
        const media = await this.mediaService.deleteMedia(query.mediaID);
        return media;
    }
}
