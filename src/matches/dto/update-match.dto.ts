import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateMatchDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly status: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly orderApproved: boolean;

  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: Date;
}
