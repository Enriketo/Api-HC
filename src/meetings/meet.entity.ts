import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Schedule } from '../schedule/schedule.entity';
import { Orders } from '../orders/order.entity';

export enum meeting_status {
    pending = 'pending',
    user_arrived = 'user_arrived',
    employee_arrived = 'employee_arrived',
    on_process = 'on_process',
    finished = 'finished'
}

@Entity()
export class Meetings {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    schedule_id: number; 

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
    employeeCalificationTime: number;

    @Column()
    employeeCalificationService: number;

    @Column({ length: 150 })
    employeeComent: string;

    @Column()
    destinyCalificationTime: number;

    @Column()
    destinyCalificationService: number;

    @Column({ length: 150 })
    destinyComent: string;

    @OneToOne(type => Schedule, schedule => schedule)
    schedule: Schedule[];

    @OneToOne(type => Orders, order => order)
    order: Orders[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
