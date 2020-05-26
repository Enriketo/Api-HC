import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { States } from '../states/state.entity';
import { Residences } from '../residences/residence.entity';
import { Users } from "../users/user.entity";
import { Employees }from "../employees/employee.entity";

@Entity()
export class Cities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    city: string;

    @ManyToOne(type => States, state => state.id)
    State: States[];

    @Column({ length: 4 })
    iso_code2: string;

    @Column({ length: 4 })
    iso_code3: string;

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
