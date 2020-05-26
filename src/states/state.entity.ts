import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Countries } from '../countries/country.entity';
import { Cities } from '../cities/city.entity';

@Entity()
export class States {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country_id: number; 

    @Column({ length: 25 })
    state: string;

    @Column({ length: 4 })
    iso_code2: string;

    @Column({ length: 4 })
    iso_code3: string;

    @Column({ length: 25 })
    location: string; 

    @ManyToOne(type => Countries, country => country)
    country: Countries[];

    @OneToMany(type => Cities, city => city)
    city: Cities[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

}
