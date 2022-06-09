import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginEmployeeDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly username: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;
}
