import { Controller, Get, Post, Body, Res, Param, NotFoundException, HttpStatus, Put, Delete, HttpException } from '@nestjs/common';
import { Users } from './user.entity';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/';
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('Users')
@Controller('api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    ) {
  }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<{ email: string; token: any; username: string }> {
        const usr = await this.usersService.getUser(loginUserDto);
        const errors = {User: ' not found'};
        if (!usr) {
            throw new HttpException({errors}, 401);
        }
        const token = await this.usersService.generateJWT(usr);
        const {email, username} = usr;
        return {email, token, username};
    }

    @Post()
    @ApiOperation({
      description: 'Create user',
    })
    @ApiResponse({
      status: 201,
      description: 'User has been created',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async create(@Body() createUser: CreateUserDto) {
      return await this.usersService.create(createUser);
    }
  
    @Get()
    @ApiOperation({
      description: 'Get all users',
    })
    @ApiResponse({
      status: 200,
      description: 'Get all users',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async findAll(): Promise<Users[]> {
      return this.usersService.findAll();
    }
  
    @Get('id/:userId')
    @ApiOperation({
      description: 'Get user by id',
    })
    @ApiParam({ name: 'userId' })
    @ApiResponse({
      status: 200,
      description: 'Get user information',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async getUser(@Res() res, @Param('userId') userId) {
      const user = await this.usersService.findOneById(userId);
      if (!user) {
        throw new NotFoundException('User does not exist!');
      }
      return res.status(HttpStatus.OK).json(user);
    }
  
    @Put('id/:userId')
    @ApiOperation({
      description: 'Update user using id',
    })
    @ApiParam({ name: 'userId' })
    @ApiResponse({
      status: 200,
      description: 'User has been updated',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async updateUser(
      @Res() res,
      @Param('userId') userId: number,
      @Body() updateUserDto: UpdateUserDto) {
      const editedUser = await this.usersService.editUser(userId, updateUserDto);
      if (!editedUser) {
        throw new NotFoundException('User does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'User has been successfully updated',
        post: editedUser,
      });
    }
  
    @Delete('id/:userId')
    @ApiOperation({
      description: 'Delete user using id',
    })
    @ApiParam({ name: 'userId' })
    @ApiResponse({
      status: 200,
      description: 'User has been deleted!',
    })
    @ApiResponse({ status: 404, description: 'Not Found' })
    async deleteUser(
      @Res() res,
      @Param('userId') userId,
    ) {
      const deletedUser = await this.usersService.deleteUser(userId);
      if (!deletedUser) {
        throw new NotFoundException('User does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'User has been deleted!',
        user: deletedUser,
      });
    }
  }
  