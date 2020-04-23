import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { ScheduleEntity } from '../schedule/schedule.entity';
import { OrderEntity } from '../order/order.entity';

export enum meeting_status {
    pending = 'pending',
    user_arrived = 'user_arrived',
    employ_arrived = 'employ_arrived',
    on_process = 'on_process',
    finished = 'finished'
}

@Entity()
export class MeetingEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 9 })
    schedule_id: number; // [ref: > schedule.id]

    @Column({ length: 1 })
    user_arrived: boolean;

    @Column({ length: 1 })
    employ_arrived: boolean;

    @Column({
        type: 'enum',
        enum: meeting_status,
        default: meeting_status.pending,
    })
    status: meeting_status;

    @Column({ length: 1 })
    califications: number;

    @Column({ length: 200 })
    coment: string;

    @OneToOne(type => ScheduleEntity, schedule => schedule)
    Schedule: ScheduleEntity[];

    @OneToOne(type => OrderEntity, order => order)
    Order: OrderEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
