import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTimeItemDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly cost: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}