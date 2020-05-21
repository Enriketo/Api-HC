import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';

export class CreateCityDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;

    @ApiProperty({
        description: 'Relation city-state',
        type: Number,
    })
    state_id: number;
    
    @ApiProperty({
        description: 'City name',
        type: String,
    })
    city: string;
    
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
        description: 'City location',
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
export class UpdateCityDTO extends PartialType(CreateCityDTO) {}
//export class UpdateCityCityDTO extends PickType(CreateCityDTO, ['city'] as const) {}
//export class UpdateCityCodeyDTO extends PickType(CreateCityDTO, ['code'] as const) {}
//export class UpdateCityIsoCode2DTO extends PickType(CreateCityDTO, ['iso_code2'] as const) {}
//export class UpdateCityIsoCode3DTO extends PickType(CreateCityDTO, ['iso_code3'] as const) {}
//export class UpdateCityLocationDTO extends PickType(CreateCityDTO, ['location'] as const) {}
//export class UpdateCityCreatedAtDTO extends PickType(CreateCityDTO, ['createdAt'] as const) {}
//export class UpdateCityUpdatedAtDTO extends PickType(CreateCityDTO, ['updatedAt'] as const) {}