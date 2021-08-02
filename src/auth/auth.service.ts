import { Injectable, BadRequestException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { EmployeesService } from "../employees/employees.service";
//import { DataService } from "../controllers/data.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly employeesService: EmployeesService,
    private readonly jwtService: JwtService,
//    private readonly dataService: DataService,
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
    if (usr && usr.username === username && usr.password === password) {
      const { password, ...result } = usr;
//      const data = await this.dataService.getData(usr);
      return result;//, data ];
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
