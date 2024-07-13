import { IsEmail, IsIn, IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
  @IsEmail()
  email: string;

  @IsIn(['U', 'E'])
  type: string;

  @ApiProperty()
  readonly updatedAt: Date;
}
