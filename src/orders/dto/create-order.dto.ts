export class CreateOrderDTO {
    readonly id: number;
    readonly match_id: number; // [ref: > matches.id]
    readonly price: number;
    //readonly status: payment_type;
    //readonly order_status: order_status;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}