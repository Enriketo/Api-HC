import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
//import { UserEntity } from './user.entity';
//import { USERS } from '../../mocks/users.mock';

export type User = any;

@Injectable()
export class UsersService {
    UserEntity: any;
    private readonly users: User[];

    constructor(
//        @InjectRepository(UserEntity)
//        private usersRepository: Repository<UserEntity>,
//        private connection: Connection,

    ) {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
            },
        ];
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
    addUser(user): Promise<any> {
        return new Promise(resolve => {
            this.UserEntity.push(user);
            resolve(this.UserEntity);
        });
    }
    deleteUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            let index = this.UserEntity.findIndex(user => user.id === id);
            if (index === -1) {
                throw new HttpException('User does not exist!', 404);
            }
            this.UserEntity.splice(1, index);
            resolve(this.UserEntity);
        });
    }
//
//    findAll(): Promise<UserEntity[]> {
//        return this.usersRepository.find();
//    }
//
//    //    findOne(id: string): Promise<UserEntity> {
//    //        return this.usersRepository.findOne(id);
//    //    }
//
//    async remove(id: string): Promise<void> {
//        await this.usersRepository.delete(id);
//    }
//    async createMany(users: UserEntity[]) {
//        const queryRunner = this.connection.createQueryRunner();
//
//        await queryRunner.connect();
//        await queryRunner.startTransaction();
//        try {
//            await queryRunner.manager.save(users[0]);
//            await queryRunner.manager.save(users[1]);
//
//            await queryRunner.commitTransaction();
//        } catch (err) {
//            // since we have errors lets rollback the changes we made
//            await queryRunner.rollbackTransaction();
//        } finally {
//            // you need to release a queryRunner which was manually instantiated
//            await queryRunner.release();
//        }
//        await this.connection.transaction(async manager => {
//            await manager.save(users[0]);
//            await manager.save(users[1]);
//        });
//    }
}

