import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { EmployeesService } from "../employees/employees.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly employeesService: EmployeesService,
    private readonly jwtService: JwtService
  ) {}

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
      throw new UnauthorizedException();
    }

    const usr = user.shift();
    if (usr && usr.password === password) {
      const { password, ...result } = usr;
      return result;
    }
  }

  async login(usr: any) {
    const payload = usr;
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
