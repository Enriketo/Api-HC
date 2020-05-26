import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly first_name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly last_name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly gender: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly phone: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly discapacity: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly opt_in: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly show_name: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly preferences: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly address: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly city_id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
    
}