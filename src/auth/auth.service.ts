import { Injectable, BadRequestException } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { EmployeesService } from "../services/employees.service";
//import { DataService } from "../controllers/data.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly employeesService: EmployeesService,
    private readonly jwtService: JwtService,
    //private readonly dataService: DataService,
  ) { }

  async validateUser(
    username: string,
    password: string,
    type: string
  ): Promise<any> {

    let user;
    if (type === "U") {
      user = await this.usersService.findOne(username);
    } else if (type === "E") {
      user = await this.employeesService.findOne(username);
    } else {
      throw new BadRequestException(`Not a valid type`);
    }

    const usr = user.shift();
    const isMatch = await bcrypt.compare(password, usr.password);
    if (usr && usr.username === username && isMatch) {
      const { password, ...result } = usr;
      return result;
    } else {
      throw new BadRequestException(`User or password invalid`);
    }
  }

  async login(usr: any) {
    const payload = usr;
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
