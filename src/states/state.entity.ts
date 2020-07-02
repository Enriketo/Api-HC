import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Countries } from '../countries/country.entity';
import { Cities } from '../cities/city.entity';

@Entity()
export class States {
    @PrimaryGeneratedColumn()
    id: 'increment';


    @Column({ length: 25 })
    state: string;

    @Column({ length: 8 })
    isoCode2: string;

    @Column({ length: 8 })
    isoCode3: string;

    @Column({ length: 25 })
    location: string; 

    @ManyToOne(type => Countries, country => country.id)
    country: Countries[];

    @OneToMany(type => Cities, city => city.id)
    city: Cities[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

}
