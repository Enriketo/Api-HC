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
import { Matches } from "./match.entity";
import { MatchesService } from "./matches.service";
import { CreateMatchDto, UpdateMatchDto } from "./dto/";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { RolesGuard } from "../auth/guards/roles.guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags("Matches")
@Controller("api/matches")
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Create match"
  })
  @ApiResponse({
    status: 201,
    description: "Match has been created"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async create(@Body() createMatch: CreateMatchDto) {
    return await this.matchesService.create(createMatch);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  async index(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<Matches>> {
    limit = limit > 100 ? 100 : limit;
    return this.matchesService.paginate({
      page,
      limit,
      route: `/api/matches`,
    });
  }
  @ApiOperation({
    description: "Get all matches"
  })
  @ApiResponse({
    status: 200,
    description: "Get all matches"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async findAll(): Promise<Matches[]> {
    return this.matchesService.findAll();
  }

  @Get("id/:matchId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Get match by id"
  })
  @ApiParam({ name: "matchId" })
  @ApiResponse({
    status: 200,
    description: "Get match information"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async getMatch(@Res() res, @Param("matchId") matchId) {
    const match = await this.matchesService.findOneById(matchId);
    if (!match) {
      throw new NotFoundException("Match does not exist!");
    }
    return res.status(HttpStatus.OK).json(match);
  }

  @Put("id/:matchId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Update match using id"
  })
  @ApiParam({ name: "matchId" })
  @ApiResponse({
    status: 200,
    description: "Match has been updated"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async updateMatch(
    @Res() res,
    @Param("matchId") matchId: number,
    @Body() updateMatchDto: UpdateMatchDto
  ) {
    const editedMatch = await this.matchesService.editMatch(
      matchId,
      updateMatchDto
    );
    if (!editedMatch) {
      throw new NotFoundException("Match does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Match has been successfully updated",
      post: editedMatch
    });
  }

  @Delete("id/:matchId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Delete match using id"
  })
  @ApiParam({ name: "matchId" })
  @ApiResponse({
    status: 200,
    description: "Match has been deleted!"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async deleteMatch(@Res() res, @Param("matchId") matchId) {
    const deletedMatch = await this.matchesService.deleteMatch(matchId);
    if (!deletedMatch) {
      throw new NotFoundException("Match does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Match has been deleted!",
      match: deletedMatch
    });
  }
}
