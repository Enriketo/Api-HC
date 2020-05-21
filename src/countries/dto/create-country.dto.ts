import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;

    @ApiProperty({
        description: 'Country name',
        type: String,
    })
    country: string;

    @ApiProperty({
        description: 'Country geo-code 1',
        type: String,
    })
    code: string;

    @ApiProperty({
        description: 'Country geo-code 2',
        type: String,
    })
    iso_code2: string;

    @ApiProperty({
        description: 'Country geo-code 3',
        type: String,
    })
    iso_code3: string;

    @ApiProperty({
        description: 'Country location',
        type: String,
    })
    location: string; // json

    @ApiProperty({
        description: 'Country geo-code 2',
        type: String,
    }) prefix: number;

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