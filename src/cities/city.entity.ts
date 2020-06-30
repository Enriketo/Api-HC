import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { States } from '../states/state.entity';
import { Residences } from '../residences/residence.entity';
import { Users } from "../users/user.entity";
import { Employees }from "../employees/employee.entity";

@Entity()
export class Cities {
    @PrimaryGeneratedColumn()
    id: 'increment';

    @Column({ length: 20 })
    city: string;

    @ManyToOne(type => States, state => state.id)
    state: States[];

    @Column({ length: 10 })
    isoCode2: string;

    @Column({ length: 10 })
    isoCode3: string;

    @Column({ length: 10 })
    location: string; //Address 

    @OneToMany(type => Residences, residence => residence.id)
    residence: Residences[];

    @OneToMany(type => Users, user => user.id)
    user: Users[];

    @OneToMany(type => Employees, employee => employee.id)
    employee: Employees[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
