import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCountryDto {

  @IsNotEmpty()
  @ApiProperty()
  readonly country: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly code: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly iso_code2: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly iso_code3: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly location: string;
  
  @IsNotEmpty()
  @ApiProperty()
  readonly phonePrefix: number;

  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: Date;
}
