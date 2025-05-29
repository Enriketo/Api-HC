import { IsNotEmpty, IsString, IsEmail, IsBoolean, IsNumber, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly username: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly docType: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly docNumber: number;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;

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

  @IsNumber()
  @IsOptional()
  @ApiProperty({ default: 0 })
  readonly averageCalification: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly penality: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ default: 0 })
  readonly totalPenalities: number;
}
