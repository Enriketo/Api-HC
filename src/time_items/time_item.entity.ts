import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Employees } from "../employees/employee.entity";

@Entity()
export class TimeItems {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name: string;

    @Column()
    cost: number;

    @OneToMany(type => Employees, employee => employee.id)
    employee: Employees[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
