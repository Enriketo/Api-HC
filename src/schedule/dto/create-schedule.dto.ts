import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;

    @ApiProperty({
        description: 'Reference schedule-match',
        type: Number,
    })
    match_id: number; // [ref: > matches.id]

    @ApiProperty({
        description: 'Date start at',
        type: Date,
    })
    start_date: Date;

    @ApiProperty({
        description: 'Date ended at',
        type: Date,
    })
    end_date: Date;

    @ApiProperty({
        description: 'Reference shcedule-residence',
        type: Number,
    })
    residences_id: number; //  [ref: > residences.id]

    @ApiProperty({
        description: 'Schedule location',
        type: String,
    })
    location: string; //json

    @ApiProperty({
        description: 'Schedule address',
        type: String,
    })
    address: string;

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