import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const usr = user.shift()
    if (usr && usr.password === pass) {
      const { password, ...result } = usr;
      return result;
    }
    return console.error('error', 404);
  }

  async login(usr: any) {
    const payload = usr;
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}