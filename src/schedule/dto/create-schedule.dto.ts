import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly match_id: number; 

    @IsNotEmpty()
    @ApiProperty()
    readonly start_date: Date;

    @IsNotEmpty()
    @ApiProperty()
    readonly end_date: Date;

    @IsNotEmpty()
    @ApiProperty()
    readonly residences_id: number; 
    
    @IsNotEmpty()
    @ApiProperty()
    readonly location: string; 

    @IsNotEmpty()
    @ApiProperty()
    readonly address: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}