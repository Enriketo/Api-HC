import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateResidenceDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly city_id : number; // [ref: > cities.id]
    
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string; // [not null]

    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly location: number; // [increment]

    @IsNotEmpty()
    @ApiProperty()
    readonly address: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly place_avalaible: boolean;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly media_id: number; // [ref: > media.id]

    @IsNotEmpty()
    @ApiProperty()
    readonly createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}