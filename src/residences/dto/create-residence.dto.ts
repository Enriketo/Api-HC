import { ApiProperty } from '@nestjs/swagger';

export class CreateResidenceDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;

    @ApiProperty({
        description: 'Relation residence-city',
        type: Number,
    })
    city_id : number; // [ref: > cities.id]
    
    @ApiProperty({
        description: 'Residence email',
        type: String,
    })
    email: string; // [not null]

    @ApiProperty({
        description: 'Residence name',
        type: String,
    })
    name: string;

    @ApiProperty({
        description: 'Residence location',
        type: Number,
    })
    location: number; // [increment]

    @ApiProperty({
        description: 'Residence address',
        type: String,
    })
    address: string;

    @ApiProperty({
        description: 'Place avalaible yes or not',
        type: Boolean,
    })
    place_avalaible: boolean;
    
    @ApiProperty({
        description: 'Reference residence-media',
        type: Number,
    })
    media_id: number; // [ref: > media.id]

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