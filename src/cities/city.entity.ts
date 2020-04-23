import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { StateEntity } from '../states/state.entity';
import { ResidenceEntity } from '../residences/residence.entity';
import { UserEntity } from "../users/user.entity";
import { EmployEntity }from "../employees/employ.entity";

@Entity()
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 4 })
    state_id: number; // [ref: > states.id] //

    @Column({ length: 30 })
    city: string;

    @Column({ length: 10 })
    code: string;

    @Column({ length: 10 })
    iso_code2: string;

    @Column({ length: 10 })
    iso_code3: string;

    @Column({ length: 20 })
    location: string;

    @ManyToOne(type => StateEntity, state => state.city)
    State: StateEntity[];

    @OneToMany(type => ResidenceEntity, residence => residence.id)
    Residence: ResidenceEntity[];

    @OneToMany(type => UserEntity, user => user.id)
    User: UserEntity[];

    @OneToMany(type => EmployEntity, employ => employ.id)
    Employ: EmployEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}