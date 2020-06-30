import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCityDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly stateId: number;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly city: string;

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
