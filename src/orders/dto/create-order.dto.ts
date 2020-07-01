import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    
    @IsNotEmpty()
    @ApiProperty()
    readonly matchId: number; 

    @IsNotEmpty()
    @ApiProperty()
    readonly price: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly status: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly orderStatus: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}