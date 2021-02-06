import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateOrderDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly price: number;

  @IsNotEmpty()
  @ApiProperty()
  readonly pay: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly orderStatus: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: Date;
}
