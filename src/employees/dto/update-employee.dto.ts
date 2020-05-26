import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {

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
    readonly discapacity_acpt: boolean;
    
    @IsNotEmpty()
    @ApiProperty()
    readonly time_item_id: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly city_id: number; 

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
    readonly updatedAt: Date;
}
