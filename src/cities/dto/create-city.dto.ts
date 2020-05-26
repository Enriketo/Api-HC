import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly state_id: number;
    
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
    readonly createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}