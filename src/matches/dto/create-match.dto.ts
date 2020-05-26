import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMatchDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly user_id: number; 

    @IsNotEmpty()
    @ApiProperty()
    readonly employee_id: number; 

    @IsNotEmpty()
    @ApiProperty()
    readonly type: string;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly username: string; 

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