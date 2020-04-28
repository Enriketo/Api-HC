import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';


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

    @Delete()
    async deleteUser(@Query() query) {
        const users = await this.usersService.deleteUser(query.userID);
        return users;
    }
}
