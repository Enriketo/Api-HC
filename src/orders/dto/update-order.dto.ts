import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {

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
    readonly updatedAt: Date;

}