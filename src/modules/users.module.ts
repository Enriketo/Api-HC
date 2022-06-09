import { Module } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { UsersController } from "../controllers/users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
