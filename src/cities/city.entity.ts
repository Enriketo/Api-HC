import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { StateEntity } from '../states/state.entity';
import { ResidenceEntity } from '../residences/residence.entity';
import { UserEntity } from "../users/user.entity";
import { EmployeeEntity }from "../employees/employee.entity";

@Entity()
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state_id: number; // [ref: > states.id] //

    @Column()
    city: string;

    @Column()
    code: string;

    @Column()
    iso_code2: string;

    @Column()
    iso_code3: string;

    @Column()
    location: string;

    @ManyToOne(type => StateEntity, state => state.city)
    State: StateEntity[];

    @OneToMany(type => ResidenceEntity, residence => residence.id)
    Residence: ResidenceEntity[];

    @OneToMany(type => UserEntity, user => user.id)
    User: UserEntity[];

    @OneToMany(type => EmployeeEntity, employee => employee.id)
    Employee: EmployeeEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
