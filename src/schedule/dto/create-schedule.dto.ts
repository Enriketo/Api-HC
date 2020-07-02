import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly startDate: Date;

    @IsNotEmpty()
    @ApiProperty()
    readonly endDate: Date;
    
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