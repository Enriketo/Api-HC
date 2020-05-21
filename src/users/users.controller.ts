import { Controller, HttpException, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user';
import { UserEntity } from './user.entity';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

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
    async create(@Body() createUserDto: CreateUserDTO){
      return this.usersService.create(createUserDto);
    }

    @Post()
    async addUser(@Body() createUserDTO: CreateUserDTO) {
        const user = await this.usersService.addUser(createUserDTO);
        return user;
    }

    @Get()
    async getUsers() {
        const users = await this.usersService.getUsers();
        return users;
    }

    @Get(':userID')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: UserEntity,
    })
    async getUser(@Param('userID') userID) {
        const user = await this.usersService.getUser(userID);
        return user;
    }

    @Delete()
    async deleteUser(@Query() query) {
        const users = await this.usersService.deleteUser(query.userID);
        return users;
    }
}
