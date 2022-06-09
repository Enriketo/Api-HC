import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateMediaDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly format: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly url: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly documentA: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly documentB: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly urlB: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly urlC: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly urlD: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly urlV: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: Date;
}
