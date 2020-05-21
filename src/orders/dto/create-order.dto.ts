import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;
    
    @ApiProperty({
        description: 'Relation order-match',
        type: Number,
    })
    match_id: number; // [ref: > matches.id]

    @ApiProperty({
        description: 'Order price',
        type: Number,
    })
    price: number;

    @ApiProperty({
        description: 'Status',
        type: String,
    })
    status: string;

    @ApiProperty({
        description: 'Order status',
        type: String,
    })
    order_status: string;

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