import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMeetDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly scheduleId: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly userArrived: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly employeeArrived: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly status: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly employeeCalificationTime: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly employeeCalificationService: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly employeeComent: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly destinyCalificationTime: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly destinyCalificationService: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly destinyComent: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}