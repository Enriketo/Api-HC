import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {

  @IsNotEmpty()
  @ApiProperty()
  readonly country: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly iso_code2: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly iso_code3: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly phonePrefix: string;

}
