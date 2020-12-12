import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
    
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
    readonly docType: string;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly docNumber: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly email: string; 

    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly isAdmin: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly gender: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly showName: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly preferences: string; 

    @IsNotEmpty()
    @ApiProperty()
    readonly discapacity: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly discapacityAcpt: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly address: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly paymentCode: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly bank: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly status: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly role: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly optIn: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly averageCalification: number; 

    @IsNotEmpty()
    @ApiProperty()
    readonly penality: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly totalPenalities: number;

    @IsNotEmpty()
    @ApiProperty({ type: [String] })
    readonly timeItemArray: string[];

    @IsNotEmpty()
    @ApiProperty()
    readonly recidence: number;

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