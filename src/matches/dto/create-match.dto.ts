export class CreateMatchDTO {
    readonly id: number;
    readonly user_id: number; // [ref: > users.id]
    readonly employee_id: number; // [ref: > employees.id]
    readonly type: string;
    readonly username: string; // [not null, unique]
    readonly order_approved: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}