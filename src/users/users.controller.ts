import { Controller, HttpException, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async getUsers() {
        const users = await this.usersService.getUsers();
        return users;
    }

    @Get(':userID')
    async getUser(@Param('userID') userID) {
        const user = await this.usersService.getUser(userID);
        return user;
    }

    @Post()
    async addUser(@Body() createUserDTO: CreateUserDTO) {
        const user = await this.usersService.addUser(createUserDTO);
        return user;
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

    @Delete()
    async deleteUser(@Query() query) {
        const users = await this.usersService.deleteUser(query.userID);
        return users;
    }
}
