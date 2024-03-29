import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateMatchDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly status: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly username: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly workername: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly orderApproved: boolean;

  @IsNotEmpty()
  @ApiProperty()
  readonly createdAt: Date;

  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: Date;
}
