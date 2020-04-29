export class CreateScheduleDTO {
    readonly id: number;
    readonly match_id: number; // [ref: > matches.id]
    readonly start_date: Date;
    readonly end_date: Date;
    readonly residences_id: number; //  [ref: > residences.id]
    readonly location: string; //json
    readonly address: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}