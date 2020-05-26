import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
    
    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly first_name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly last_name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly username: string; // [not null, unique]

    @IsNotEmpty()
    @ApiProperty()
    readonly email: string; // [not null, unique]

    @IsNotEmpty()
    @ApiProperty()
    readonly password: string;// varbinary[not null]

    @IsNotEmpty()
    @ApiProperty()
    readonly doc_type: string;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly doc_number: number;

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
    readonly preferences: string; // json

    @IsNotEmpty()
    @ApiProperty()
    readonly discapacity: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly discapacity_acpt: boolean;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly time_item_id: number; // [ref: > time_items.id]

    @IsNotEmpty()
    @ApiProperty()
    readonly city_id: number; // [ref: > cities.id]

    @IsNotEmpty()
    @ApiProperty()
    readonly address: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly payment_code: string;

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
    readonly opt_in: boolean;

    @IsNotEmpty()
    @ApiProperty()
    readonly average_calification: number; // float

    @IsNotEmpty()
    @ApiProperty()
    readonly penality: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly total_penalities: number;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly createdAt: Date;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly updatedAt: Date;
}