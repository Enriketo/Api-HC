import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly lastName: string;

  //@IsNotEmpty()
  //@ApiProperty()
  //readonly password: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: false })
  readonly isAdmin: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly gender: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: true })
  readonly showName: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly preferences: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: false })
  readonly discapacity: boolean;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: false })
  readonly discapacityAcpt: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly address: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly paymentCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly bank: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: true })
  readonly status: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly role: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: false })
  readonly optIn: boolean;

  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: Date;
}
