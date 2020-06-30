import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly firstName: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly lastName: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly username: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly email: string; 

    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly docType: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly docNumber: number;

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
    readonly dob: Date;

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
    readonly mediaId: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly createdAt: Date;

    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}