import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCountryDto {

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
  readonly updatedAt: Date;
}
