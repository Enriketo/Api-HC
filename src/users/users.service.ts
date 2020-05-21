import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { SECRET } from '../config';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository, Connection, getRepository} from 'typeorm';
import { UserEntity } from './user.entity';
import { UserClass } from './classes/user.class';

export type User = any;
const jwt = require('jsonwebtoken');

@Injectable()
export class UsersService {
    UserEntity: any;

    private readonly users: User[];
    create(user: CreateUserDTO): UserClass {
        this.users.push(user);
        return user;
    }

    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        private connection: Connection,
    ) {}

    async addUser(dto: CreateUserDTO): Promise<{ user: { email: string; username: string; token: any } }> {

        // check uniqueness of username/email
        const {username, email, password} = dto;
        const qb = await getRepository(UserEntity)
            .createQueryBuilder('user')
            .where('user.username = :username', { username })
            .orWhere('user.email = :email', { email });

        const user = await qb.getOne();

        if (user) {
            const errs = {username: 'Username and email must be unique.'};
            throw new HttpException({message: 'Input data validation failed', errs}, HttpStatus.BAD_REQUEST);

        }

        // create new user
        const newUser = new UserEntity();
        newUser.username = username;
        newUser.email = email;
        newUser.password = password;

        const errors = await validate(newUser);
        if (errors.length > 0) {
            const err = {username: 'Userinput is not valid.'};
            throw new HttpException({message: 'Input data validation failed', err}, HttpStatus.BAD_REQUEST);

        } else {
            const savedUser = await this.usersRepository.save(newUser);
            return this.buildUserRO(savedUser);
        }
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    getUsers(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.UserEntity);
        });
    }
    getUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            const user = this.UserEntity.find(user => user.id === id);
            if (!user) {
                throw new HttpException('User does not exist!', 404);
            }
            resolve(user);
        });
    }

    deleteUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            let index = this.UserEntity.findIndex(user => user.id === id);
            if (index === -1) {
                throw new HttpException('User does not exist!', 404);
            } else {
                this.UserEntity.splice(1, index);
                resolve(this.UserEntity);
            }
        });
    }

    findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
    async createMany(users: UserEntity[]) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(users[0]);
            await queryRunner.manager.save(users[1]);

            await queryRunner.commitTransaction();
        } catch (err) {
            // since we have errors lets rollback the changes we made
            await queryRunner.rollbackTransaction();
        } finally {
            // you need to release a queryRunner which was manually instantiated
            await queryRunner.release();
        }
        await this.connection.transaction(async manager => {
            await manager.save(users[0]);
            await manager.save(users[1]);
        });
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

    private buildUserRO(user: UserEntity) {
        const userRO = {
            username: user.username,
            email: user.email,
            token: this.generateJWT(user),
        };

        return {user: userRO};
    }
}
