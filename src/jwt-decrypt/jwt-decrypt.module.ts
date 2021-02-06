import { Module } from "@nestjs/common";
import { JwtDecryptService } from "./jwt-decrypt.service";
import { JwtDecryptController } from "./jwt-decrypt.controller";

@Module({
  providers: [JwtDecryptService],
  controllers: [JwtDecryptController]
})
export class JwtDecryptModule {}
