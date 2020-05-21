import { ApiProperty } from '@nestjs/swagger';

export class CreateTimeItemDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;

    @ApiProperty({
        description: 'Time item name',
        type: String,
    })
    name: string;

    @ApiProperty({
        description: 'Time cost',
        type: String,
    })
    cost: number;

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