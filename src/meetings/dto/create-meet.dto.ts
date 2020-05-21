import { ApiProperty } from '@nestjs/swagger';

export class CreateMeetDTO {
    @ApiProperty({
        description: 'Key field',
        type: Number,
    })
    id: number;

    @ApiProperty({
        description: 'Refrece meet-schedule',
        type: Number,
    })
    schedule_id: number; // [ref: > schedule.id]

    @ApiProperty({
        description: 'User arrived to meet yes or not',
        type: Boolean,
    })
    user_arrived: boolean;

    @ApiProperty({
        description: 'Employee arrived to meet yes or not',
        type: Boolean,
    })
    employee_arrived: boolean;

    @ApiProperty({
        description: 'Meet status',
        type: String,
    })
    status: string;

    @ApiProperty({
        description: 'Meet calification',
        type: Number,
    })
    califications: number;

    @ApiProperty({
        description: 'Meet coments',
        type: String,
    })
    coment: string;

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