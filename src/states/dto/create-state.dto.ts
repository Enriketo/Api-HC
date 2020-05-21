import { ApiProperty } from '@nestjs/swagger';

export class CreateStateDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;
    
    @ApiProperty({
        description: 'Relation state country ',
        type: Number,
    })
    country_id: number; // [ref: > countries.id]
    
    @ApiProperty({
        description: 'State name',
        type: String,
    })
    state: string;

    @ApiProperty({
        description: 'Geo referencer A',
        type: String,
    })
    code: string;
    
    @ApiProperty({
        description: 'Geo referencer B',
        type: String,
    })
    iso_code2: string;
    
    @ApiProperty({
        description: 'Geo referencer C',
        type: String,
    })
    iso_code3: string;
    
    @ApiProperty({
        description: 'State location',
        type: String,
    })
    location: string;

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