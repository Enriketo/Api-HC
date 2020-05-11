import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { EmployeeEntity } from "../employees/employee.entity";

@Entity()
export class TimeItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    name: string;

    @Column({ length: 9 })
    cost: number;

    @OneToMany(type => EmployeeEntity, employee => employee.id)
    Employee: EmployeeEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
