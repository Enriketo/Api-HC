import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { EmployeeEntity } from '../employees/employee.entity';
import { ScheduleEntity } from '../schedule/schedule.entity';

export enum match_status {
    accepted = 'accepted',
    rejected = 'rejected',
    pending = 'pending',
    denied = 'denied',
    created = 'created'
}

@Entity()
export class MatchEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    user_id: number; // [ref: > users.id]

    @Column({ length: 20 })
    employee_id: number; // [ref: > employees.id]

    @Column({
        type: 'enum',
        enum: match_status,
        default: match_status.pending,
    })
    type: match_status;

    @Column({ length: 20 })
    username: string; // [not null, unique]

    @Column({ length: 25 })
    order_approved: boolean;

    @ManyToOne(type => UserEntity, user => user.id)
    User: UserEntity[];

    @ManyToOne(type => EmployeeEntity, employee => employee.id)
    Employee: EmployeeEntity[];

    @OneToOne(type => ScheduleEntity, schedule => schedule.id)
    Schedule: ScheduleEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}