export class CreateOrderDTO {
    readonly id: number;
    readonly match_id: number; // [ref: > matches.id]
    readonly price: number;
    readonly status: string;
    readonly order_status: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}