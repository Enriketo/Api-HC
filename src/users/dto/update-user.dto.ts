import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly firstName: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly lastName: string;

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
    readonly optIn: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly showName: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly preferences: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly address: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly cityId: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
    
}