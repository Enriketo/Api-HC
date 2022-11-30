import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, getRepository } from "typeorm";
import { Users } from "../entities/user.entity";
import { UpdateResult, DeleteResult } from "typeorm";
import { SECRET } from "../config";
import { CreateUserDto } from "../dtos/create-user.dto";
const jwt = require("jsonwebtoken");
import { paginate, Pagination, IPaginationOptions, } from 'nestjs-typeorm-paginate';
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>
  ) { }

  //Login user
  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.find({ username });
  }

  //Create users
  async addUser(
    dto: CreateUserDto
  ): Promise<{ user: { email: string; username: string; token: any } }> {
    // check uniqueness of username/email
    const { username, email, password } = dto;
    const qb = await getRepository(Users)
      .createQueryBuilder("user")
      .where("user.username = :username", { username })
      .orWhere("user.email = :email", { email });
    const user = await qb.getOne();
    if (user) {
      const errs = { username: "Username and email must be unique." };
      throw new HttpException(
        { message: "Input data validation failed", errs },
        HttpStatus.BAD_REQUEST
      );
    }
    // create new user
    const newUser = new Users();
    newUser.username = username;
    newUser.email = email;
    //Hashing password 
    const hash = await bcrypt.hash(password, 10);
    newUser.password = hash;
    const savedUser = await this.userRepository.save(newUser);
    return this.buildUserRO(savedUser);
  }
  //Create a user token when user is well created
  private buildUserRO(user: Users) {
    const userRO = {
      username: user.username,
      email: user.email,
      token: this.generateJWT(user)
    };
    return { user: userRO };
  }
  //Generates a token to access app information
  public generateJWT(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        exp: exp.getTime() / 1000
      },
      SECRET
    );
  }

  //Find all users
  async findAll(): Promise<Users[]> {
    return await this.userRepository.find();
  }

  //Find user by ID
  async getUser(usr): Promise<any> {
    return new Promise(resolve => {
      const user = this.userRepository.find(usr);
      if (!user) {
        throw new HttpException("User does not exist!", 404);
      }
      resolve(user);
    });
  }
  //Find user if exits to return
  async findOneById(userId): Promise<Users> {
    return await this.userRepository.findOne(userId);
  }

  //Edit user by ID
  async editUser(userId, user): Promise<UpdateResult> {
    return await this.userRepository.update(userId, user);
  }

  //Delete user by ID
  async deleteUser(userId): Promise<DeleteResult> {
    return await this.userRepository.delete(userId);
  }

  //Paginate
  async paginate(options: IPaginationOptions): Promise<Pagination<Users>> {
    return paginate<Users>(this.userRepository, options);
  }
}
