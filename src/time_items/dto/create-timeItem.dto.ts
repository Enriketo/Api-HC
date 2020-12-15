import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTimeItemDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

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
    readonly createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}