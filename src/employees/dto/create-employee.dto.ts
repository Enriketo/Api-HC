import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;

    @ApiProperty({
        description: 'Employee first name',
        type: String,
    })
    first_name: string;

    @ApiProperty({
        description: 'Employee last name',
        type: String,
    })
    last_name: string;

    @ApiProperty({
        description: 'Employee username',
        type: String,
    })
    username: string; // [not null, unique]

    @ApiProperty({
        description: 'Employee email',
        type: String,
    })
    email: string; // [not null, unique]

    @ApiProperty({
        description: 'Employee password',
        type: String,
    })
    password: string;// varbinary[not null]

    @ApiProperty({
        description: 'Employee document type',
        type: String,
    })
    doc_type: string;
    
    @ApiProperty({
        description: 'Employee document number',
        type: Number,
    })
    doc_number: number;

    @ApiProperty({
        description: 'Employee is admin or not',
        type: Boolean,
    })
    isAdmin: boolean;

    @ApiProperty({
        description: 'Employee gender',
        type: String,
    })
    gender: string;

    @ApiProperty({
        description: 'Show names yes or not',
        type: Boolean,
    })
    showName: boolean;

    @ApiProperty({
        description: 'Employee preferences',
        type: String,
    })
    preferences: string; // json

    @ApiProperty({
        description: 'Employee have discapacity yes or not',
        type: Boolean,
    })
    discapacity: boolean;

    @ApiProperty({
        description: 'Employee acept discapacity yes or not',
        type: Boolean,
    })
    discapacity_acpt: boolean;
    
    @ApiProperty({
        description: 'Employee time item id selected',
        type: Number,
    })
    time_item_id: number; // [ref: > time_items.id]

    @ApiProperty({
        description: 'Relation employee - city',
        type: Number,
    })
    city_id: number; // [ref: > cities.id]

    @ApiProperty({
        description: 'Employee address',
        type: String,
    })
    address: string;

    @ApiProperty({
        description: 'Employee payment code',
        type: String,
    })
    payment_code: string;

    @ApiProperty({
        description: 'Employee bank',
        type: String,
    })
    bank: string;

    @ApiProperty({
        description: 'Employee status',
        type: String,
    })
    status: string;

    @ApiProperty({
        description: 'Employee role',
        type: String,
    })
    role: string;

    @ApiProperty({
        description: 'OPT IN',
        type: String,
    })
    opt_in: boolean;

    @ApiProperty({
        description: 'Average calification',
        type: Number,
    })
    average_calification: number; // float

    @ApiProperty({
        description: 'Last penalty',
        type: String,
    })
    penality: string;

    @ApiProperty({
        description: 'Employee total penalities',
        type: Number,
    })
    total_penalities: number;
    
    @ApiProperty({
        description: 'Refence employee - media',
        type: String,
    })
    @ApiProperty({
        description: 'Created date',
        type: Date,
    })
    createdAt: Date;
    
    @ApiProperty({
        description: 'Updated date',
        type: Date,
    })
    updatedAt: Date;
}