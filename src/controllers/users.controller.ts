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
  HttpException,
  UseGuards,
  Request,
  Query
} from "@nestjs/common";
import { Users } from "../entities/user.entity";
import { UsersService } from "../services/users.service";
import { CreateUserDto, UpdateUserDto } from "../dtos/user-index";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { RolesGuard } from "../auth/guards/roles.guard";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags("Users")
@Controller("api/users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiOperation({
    description: "Create user"
  })
  @ApiResponse({
    status: 201,
    description: "User has been created"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async create(@Body() createUser: CreateUserDto) {
    return await this.usersService.addUser(createUser);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  async index(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<Users>> {
    limit = limit > 100 ? 100 : limit;
    return this.usersService.paginate({
      page,
      limit,
      route: `/api/users`,
    });
  }
  @ApiOperation({
    description: "Get all users"
  })
  @ApiResponse({
    status: 200,
    description: "Get all users"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get("id/:userId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Get user by id"
  })
  @ApiParam({ name: "userId" })
  @ApiResponse({
    status: 200,
    description: "Get user information"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async getUser(@Res() res, @Param("userId") userId) {
    const user = await this.usersService.findOneById(userId);
    if (!user) {
      throw new NotFoundException("User does not exist!");
    }
    return res.status(HttpStatus.OK).json(user);
  }

  @Put("id/:userId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Update user using id"
  })
  @ApiParam({ name: "userId" })
  @ApiResponse({
    status: 200,
    description: "User has been updated"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async updateUser(
    @Res() res,
    @Param("userId") userId: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    const editedUser = await this.usersService.editUser(userId, updateUserDto);
    if (!editedUser) {
      throw new NotFoundException("User does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "User has been successfully updated",
      post: editedUser
    });
  }

  @Delete("id/:userId")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({
    description: "Delete user using id"
  })
  @ApiParam({ name: "userId" })
  @ApiResponse({
    status: 200,
    description: "User has been deleted!"
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  async deleteUser(@Res() res, @Param("userId") userId) {
    const deletedUser = await this.usersService.deleteUser(userId);
    if (!deletedUser) {
      throw new NotFoundException("User does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "User has been deleted!",
      user: deletedUser
    });
  }
}
