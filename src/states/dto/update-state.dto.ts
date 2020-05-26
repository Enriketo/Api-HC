import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStateDto {
    
    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly country_id: number; // [ref: > countries.id]
    
    @IsNotEmpty()
    @ApiProperty()
    readonly state: string;

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