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
import { Meetings } from "./meet.entity";
import { MeetingsService } from "./meetings.service";
import { CreateMeetDto, UpdateMeetDto } from "./dto/";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("Meetings")
@Controller("api/meetings")
export class MeetingsController {
  constructor(private readonly meetingsService: MeetingsService) {}

  @Post()
  @ApiOperation({
    description: "Create meet"
  })
  @ApiResponse({
    status: 201,
    description: "Meet has been created"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async create(@Body() createMeet: CreateMeetDto) {
    return await this.meetingsService.create(createMeet);
  }

  @Get()
  @ApiOperation({
    description: "Get all meetings"
  })
  @ApiResponse({
    status: 200,
    description: "Get all meetings"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async findAll(): Promise<Meetings[]> {
    return this.meetingsService.findAll();
  }

  @Get("id/:meetId")
  @ApiOperation({
    description: "Get meet by id"
  })
  @ApiParam({ name: "meetId" })
  @ApiResponse({
    status: 200,
    description: "Get meet information"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async getMeet(@Res() res, @Param("meetId") meetId) {
    const meet = await this.meetingsService.findOneById(meetId);
    if (!meet) {
      throw new NotFoundException("Meet does not exist!");
    }
    return res.status(HttpStatus.OK).json(meet);
  }

  @Put("id/:meetId")
  @ApiOperation({
    description: "Update meet using id"
  })
  @ApiParam({ name: "meetId" })
  @ApiResponse({
    status: 200,
    description: "Meet has been updated"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async updateMeet(
    @Res() res,
    @Param("meetId") meetId: number,
    @Body() updateMeetDto: UpdateMeetDto
  ) {
    const editedMeet = await this.meetingsService.editMeet(
      meetId,
      updateMeetDto
    );
    if (!editedMeet) {
      throw new NotFoundException("Meet does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Meet has been successfully updated",
      post: editedMeet
    });
  }

  @Delete("id/:meetId")
  @ApiOperation({
    description: "Delete meet using id"
  })
  @ApiParam({ name: "meetId" })
  @ApiResponse({
    status: 200,
    description: "Meet has been deleted!"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async deleteMeet(@Res() res, @Param("meetId") meetId) {
    const deletedMeet = await this.meetingsService.deleteMeet(meetId);
    if (!deletedMeet) {
      throw new NotFoundException("Meet does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Meet has been deleted!",
      meet: deletedMeet
    });
  }
}
