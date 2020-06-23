import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMeetDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly schedule_id: number;

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