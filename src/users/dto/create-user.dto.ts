import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;

    @ApiProperty({
        description: 'User first name',
        type: String,
    })
    first_name: string;

    @ApiProperty({
        description: 'User last name',
        type: String,
    })
    last_name: string;

    @ApiProperty({
        description: 'User name',
        type: String,
    })
    username: string;

    @ApiProperty({
        description: 'User email',
        type: String,
    })
    email: string; 

    @ApiProperty({
        description: 'User password',
        type: String,
    })
    password: string;

    @ApiProperty({
        description: 'User document type',
        type: String,
    })
    doc_type: string;

    @ApiProperty({
        description: 'User document number',
        type: Number,
    })
    doc_number: number;

    @ApiProperty({
        description: 'User gender',
        type: String,
    })
    gender: string;

    @ApiProperty({
        description: 'User phone number',
        type: Number,
    })
    phone: number;

    @ApiProperty({
        description: 'User have discapacity yes or not',
        type: Boolean,
    })
    discapacity: boolean;

    @ApiProperty({
        description: 'User acept discapacity yes or not',
        type: Boolean,
    })
    opt_in: boolean;

    @ApiProperty({
        description: 'Show user names yes or not',
        type: Boolean,
    })
    show_name: boolean;

    @ApiProperty({
        description: 'Date of birthday',
        type: Date,
    })
    dob: Date;

    @ApiProperty({
        description: 'User preferences',
        type: String,
    })
    preferences: string;

    @ApiProperty({
        description: 'User address',
        type: String,
    })
    address: string;

    @ApiProperty({
        description: 'Relation user-city',
        type: Number,
    })
    city_id: number;

    @ApiProperty({
        description: 'User media number',
        type: Number,
    })
    media_id: number;

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
