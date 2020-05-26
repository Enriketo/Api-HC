import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMeetDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly schedule_id: number; // [ref: > schedule.id]

    @IsNotEmpty()
    @ApiProperty()
    readonly user_arrived: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly employee_arrived: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly status: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly califications: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly coment: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;

}
