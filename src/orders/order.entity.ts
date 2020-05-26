import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { Meetings } from '../meetings/meet.entity';

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
export class Orders {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    match_id: number; 

    @Column()
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

    @OneToOne(type => Meetings, meet => meet.id)
    meet: Meetings[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
