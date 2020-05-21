import { ApiProperty } from '@nestjs/swagger';

export class CreateMatchDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;

    @ApiProperty({
        description: 'Relation match-user',
        type: Number,
    })
    user_id: number; // [ref: > users.id]

    @ApiProperty({
        description: 'Relation match-employee',
        type: Number,
    })
    employee_id: number; // [ref: > employees.id]

    @ApiProperty({
        description: 'Match type',
        type: String,
    })
    type: string;
    
    @ApiProperty({
        description: 'Username',
        type: String,
    })
    username: string; // [not null, unique]

    @ApiProperty({
        description: 'Order aproved yes or not',
        type: Boolean,
    })
    order_approved: boolean;

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