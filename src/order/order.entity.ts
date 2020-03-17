import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';

export enum payment_type {
    cash = 'cash',
    credit_card = 'credit card',
    debit_card = 'debit card'
}

export enum order_status {
    approved = 'approved',
    rejected = 'rejected',
    denied = 'denied',
    pending = 'pending',
}

@Entity()
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 9 })
    match_id: number; // [ref: > matches.id]

    @Column({ length: 9 })
    price: number;

    @Column({
        type: 'enum',
        enum: payment_type,
        default: payment_type.cash,
    })
    status: payment_type;

    @Column({
        type: 'enum',
        enum: order_status,
        default: order_status.approved,
    })
    order_status: order_status;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
