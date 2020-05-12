import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CountryEntity } from '../countries/country.entity';
import { CityEntity } from '../cities/city.entity';

@Entity()
export class StateEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country_id: number; // [ref: > countries.id]

    @Column()
    state: string;

    @Column()
    code: string; //  [ref: > residences.id]

    @Column()
    iso_code2: string;

    @Column()
    iso_code3: string;

    @Column()
    location: string; // json

    @ManyToOne(type => CountryEntity, country => country)
    country: CountryEntity[];

    @OneToMany(type => CityEntity, city => city)
    city: CityEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
