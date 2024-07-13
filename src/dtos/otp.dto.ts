import { IsEmail, IsNotEmpty, IsString, IsIn } from 'class-validator';

export class OtpDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  otp: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['U', 'E'])
  type: string;  // 'U' para usuarios y 'E' para empleados
}
