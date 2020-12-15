import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Employees } from "../employees/employee.entity";

@Entity()
export class TimeItems {
    @PrimaryGeneratedColumn()
    id: 'increment';

//    @Column({ length: 25 })
//    name: string;

    @Column()
    cost: number;

    @Column()
    cost2: number;

    @Column()
    cost3: number;

    @Column()
    cost4: number;

    @OneToMany(type => Employees, employee => employee.id)
    employee: Employees[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
