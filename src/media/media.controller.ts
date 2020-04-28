import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDTO } from './dto/create-media.dto';

@Controller('media')
export class MediaController {
    constructor(private mediaService: MediaService) { }

    @Get(':mediaID')
    async getMedia(@Param('mediaID') mediaID) {
        const media = await this.mediaService.getMedia(mediaID);
        return media;
    }

    @Post()
    async addMedia(@Body() createMediaDTO: CreateMediaDTO) {
        const media = await this.mediaService.addMedia(createMediaDTO);
        return media;
    }

    @Delete()
    async deleteMedia(@Query() query) {
        const media = await this.mediaService.deleteMedia(query.mediaID);
        return media;
    }
}
