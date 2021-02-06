import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateStateDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly state: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly isoCode2: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly isoCode3: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly location: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: Date;
}
