import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMediaDto {
    
    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly type: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly format: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly url: string;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;

}
