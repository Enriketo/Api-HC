import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';
import { UserSubscriber } from './user.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    exports: [TypeOrmModule],
    controllers: [UsersController],
    providers: [UsersService, UserSubscriber]
})
export class UsersModule {}
