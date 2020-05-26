import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMatchDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly user_id: number; // [ref: > users.id]

    @IsNotEmpty()
    @ApiProperty()
    readonly employee_id: number; // [ref: > employees.id]

    @IsNotEmpty()
    @ApiProperty()
    readonly type: string;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly username: string; // [not null, unique]

    @IsNotEmpty()
    @ApiProperty()
    readonly order_approved: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
    
}