import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { ScheduleEntity } from '../schedule/schedule.entity';
import { OrderEntity } from '../orders/order.entity';

export enum meeting_status {
    pending = 'pending',
    user_arrived = 'user_arrived',
    employee_arrived = 'employee_arrived',
    on_process = 'on_process',
    finished = 'finished'
}

@Entity()
export class MeetEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    schedule_id: number; // [ref: > schedule.id]

    @Column()
    user_arrived: boolean;

    @Column()
    employee_arrived: boolean;

    @Column({
        type: 'enum',
        enum: meeting_status,
        default: meeting_status.pending,
    })
    status: meeting_status;

    @Column()
    califications: number;

    @Column()
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
