import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCountryDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly country: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly isoCode2: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly isoCode3: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly location: string; // json

  @IsNotEmpty()
  @ApiProperty()
  readonly phonePrefix: number;

  @IsNotEmpty()
  @ApiProperty()
  readonly createdAt: Date;

  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: Date;
}
