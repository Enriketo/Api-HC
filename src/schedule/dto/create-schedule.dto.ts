import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly matchId: number; 

    @IsNotEmpty()
    @ApiProperty()
    readonly startDate: Date;

    @IsNotEmpty()
    @ApiProperty()
    readonly endDate: Date;

    @IsNotEmpty()
    @ApiProperty()
    readonly residencesId: number; // When no residence this is null
    
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