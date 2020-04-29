export class CreateMatchDTO {
    readonly id: number;
    readonly user_id: number; // [ref: > users.id]
    readonly employ_id: number; // [ref: > employees.id]
    //readonly type: match_status;
    readonly username: string; // [not null, unique]
    readonly order_approved: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}