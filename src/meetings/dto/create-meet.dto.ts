export class CreateMeetDTO {
    readonly id: number;
    readonly schedule_id: number; // [ref: > schedule.id]
    readonly user_arrived: boolean;
    readonly employee_arrived: boolean;
    readonly status: string;
    readonly califications: number;
    readonly coment: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}