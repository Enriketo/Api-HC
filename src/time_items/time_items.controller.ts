import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { TimeItemsService } from './time_items.service';
import { CreateTimeItemDTO } from './dto/create-time_Item.dto';

@Controller('time_items')
export class TimeItemsController {
    constructor(private time_itemsService: TimeItemsService) { }

    @Get()
    async getTimeItems() {
        const time_items = await this.time_itemsService.getTimeItems();
        return time_items;
    }

    @Get(':time_itemID')
    async getTimeItem(@Param('time_itemID') time_itemID) {
        const time_item = await this.time_itemsService.getTimeItem(time_itemID);
        return time_item;
    }

    @Post()
    async addTimeItem(@Body() createTimeItemDTO: CreateTimeItemDTO) {
        const time_item = await this.time_itemsService.addTimeItem(createTimeItemDTO);
        return time_item;
    }

    @Delete()
    async deleteTimeItem(@Query() query) {
        const time_items = await this.time_itemsService.deleteTimeItem(query.time_itemID);
        return time_items;
    }
}
