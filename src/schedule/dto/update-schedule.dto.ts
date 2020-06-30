import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateScheduleDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly startDate: Date;

    @IsNotEmpty()
    @ApiProperty()
    readonly endDate: Date;

    @IsNotEmpty()
    @ApiProperty()
    readonly residencesId: number; 

    @IsNotEmpty()
    @ApiProperty()
    readonly location: string; 

    @IsNotEmpty()
    @ApiProperty()
    readonly address: string;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}