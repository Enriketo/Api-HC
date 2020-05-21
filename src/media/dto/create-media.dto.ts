import { ApiProperty } from '@nestjs/swagger';

export class CreateMediaDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;

    @ApiProperty({
        description: 'Media typr',
        type: String,
    })
    type: string;

    @ApiProperty({
        description: 'Media format',
        type: String,
    })
    format: string;

    @ApiProperty({
        description: 'Media URL',
        type: String,
    })
    url: string;
    
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