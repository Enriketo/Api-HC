import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "../users/users.module";
import { EmployeesModule } from "../employees/employees.module";
import { AuthService } from "./auth.service";
//import { DataModule } from "../controllers/data.module";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";
import { RolesGuard } from "./guards/roles.guard";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: `5400s` }
    }),
    EmployeesModule,
//    DataModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, RolesGuard], //DataModule],
  exports: [AuthService]
})
export class AuthModule {}