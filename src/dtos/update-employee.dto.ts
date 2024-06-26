import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateEmployeeDto {
  //@IsNotEmpty()
  @ApiProperty()
  readonly firstName: string;

  //@IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;

  //@IsNotEmpty()
  //@ApiProperty()
  //readonly password: string;

  //@IsNotEmpty()
  @ApiProperty()
  readonly isAdmin: boolean;

  //@IsNotEmpty()
  @ApiProperty()
  readonly gender: string;

  //@IsNotEmpty()
  @ApiProperty()
  readonly showName: boolean;

  //@IsNotEmpty()
  @ApiProperty()
  readonly preferences: string;

  //@IsNotEmpty()
  @ApiProperty()
  readonly discapacity: boolean;

  //@IsNotEmpty()
  @ApiProperty()
  readonly discapacityAcpt: boolean;

  //@IsNotEmpty()
  @ApiProperty()
  readonly address: string;

  //@IsNotEmpty()
  @ApiProperty()
  readonly paymentCode: string;

  //@IsNotEmpty()
  @ApiProperty()
  readonly bank: string;

  //@IsNotEmpty()
  @ApiProperty()
  readonly status: string;

  //@IsNotEmpty()
  @ApiProperty()
  readonly role: string;

  //@IsNotEmpty()
  @ApiProperty()
  readonly optIn: boolean;

  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: Date;
}
