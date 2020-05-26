import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    
    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly match_id: number; 

    @IsNotEmpty()
    @ApiProperty()
    readonly price: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly status: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly order_status: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly  createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}