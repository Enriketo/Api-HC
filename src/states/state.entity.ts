import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { CountryEntity } from '../countries/country.entity';

@Entity()
export class StateEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    country_id: number; // [ref: > countries.id]

    @Column({ length: 30 })
    state: string;

    @Column({ length: 10 })
    code: string; //  [ref: > residences.id]

    @Column({ length: 10 })
    iso_code2: string;

    @Column({ length: 10 })
    iso_code3: string;

    @Column({ length: 20 })
    location: string; // json

    @ManyToOne(type => CountryEntity, country => country)
    country: CountryEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
