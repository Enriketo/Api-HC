import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTimeItemDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly cost: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly cost2: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly cost3: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly cost4: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}