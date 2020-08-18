import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Users } from './user.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
import { SECRET } from '../config';
import { validate } from 'class-validator';
import { CreateUserDto } from './dto/create-user.dto';

export type User = any;
const jwt = require('jsonwebtoken');

@Injectable()
export class UsersService {
    users: User;

    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) {}

    async addUser(dto: CreateUserDto): Promise<{ user: { email: string; username: string; token: any } }> {

        // check uniqueness of username/email
        const {username, email, password} = dto;
        const qb = await getRepository(Users)
            .createQueryBuilder('user')
            .where('user.username = :username', { username })
            .orWhere('user.email = :email', { email });

        const user = await qb.getOne();

        if (user) {
            const errs = {username: 'Username and email must be unique.'};
            throw new HttpException({message: 'Input data validation failed', errs}, HttpStatus.BAD_REQUEST);
        }

        // create new user
        const newUser = new Users();
        newUser.username = username;
        newUser.email = email;
        newUser.password = password;

        const errors = await validate(newUser);
        if (errors.length > 0) {
            const err = {username: 'Userinput is not valid.'};
            throw new HttpException({message: 'Input data validation failed', err}, HttpStatus.BAD_REQUEST);

        } else {
            const savedUser = await this.userRepository.save(newUser);
            return this.buildUserRO(savedUser);
        }
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    getUser(usr): Promise<any> {
        //let id = Number(userID);
        //console.log(id);
        return new Promise(resolve => {
            const user = this.userRepository.find(usr);
            console.log(user);
            if (!user) {
                throw new HttpException('User does not exist!', 404);
            }
            resolve(user);
        });
    }

     async create(user): Promise<Users> {
        console.log(user);
        return await this.userRepository.save(user);
      }

      async findAll(): Promise<Users[]> {
        return await this.userRepository.find();
      }

      async findOneById(userId): Promise<Users> {
        return await this.userRepository.findOne(userId);
      }

      async editUser(userId, user): Promise<UpdateResult> {
        return await this.userRepository.update(userId, user);
      }

      async deleteUser(userId): Promise<DeleteResult> {
        return await this.userRepository.delete(userId);
      }

      public generateJWT(user) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);

        return jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email,
            exp: exp.getTime() / 1000,
        }, SECRET);
    }

    private buildUserRO(user: Users) {
        const userRO = {
            username: user.username,
            email: user.email,
            token: this.generateJWT(user),
        };

        return {user: userRO};
    }
}
