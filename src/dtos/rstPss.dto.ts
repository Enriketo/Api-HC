// rstPss.dto.ts
import { IsEmail, IsIn, IsString, MinLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class ResetPasswordDto {
  @IsEmail()
  email: string;

  @IsIn(['U', 'E'])
  type: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  newPassword: string;

  @ApiProperty()
  @IsString()
  otp: string; // Añade un campo para OTP
}
