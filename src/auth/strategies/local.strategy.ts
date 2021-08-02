import { Injectable, NotFoundException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ passReqToCallback: true });
  }

  async validate(req: any, username: string, password: string): Promise<any> {
    const type = req.body.type;
    const user = await this.authService.validateUser(username, password, type);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
