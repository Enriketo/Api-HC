import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { JwtDecryptService } from "../jwt-decrypt/jwt-decrypt.service";

@ApiTags('JwtSchedule')
@Controller('api/schedule')
export class JwtDecryptController {
    constructor(
        private readonly jwtDecryptService: JwtDecryptService,
    ) {
    }

    @Post()
    @ApiOperation({
        description: 'Create schedule',
    })
    @ApiResponse({
        status: 201,
        description: 'Schedule has been created',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async create(@Body() createSchedule) {
        return await this.jwtDecryptService.create(createSchedule);
    }
}
