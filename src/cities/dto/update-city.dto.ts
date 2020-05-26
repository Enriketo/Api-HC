import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCityDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly city: string;

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
    readonly updatedAt: Date;

}
