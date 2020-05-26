import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Cities } from '../cities/city.entity';
import { Media } from '../media/media.entity';
import { Matches } from '../matches/match.entity';

export enum doc_type {
    cc = 'Cédula de ciudadanía',
    nit = 'Número de indentificación tributaria',
    ce = 'Cédula de extranjería'
}

export enum gender {
    male = 'male',
    female = 'female',
    tx_male = 'transexual male',
    tx_female = 'tramsexual female',
    gay = 'gay',
    lesbian = 'lesbian',
    undefined = 'undefined'
}

@Entity()
@Unique(["username", "email"])
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    first_name: string;

    @Column({ length: 20 })
    last_name: string;

    @Column({ length: 15 })
    username: string; 

    @Column({
        type: 'enum',
        enum: doc_type,
        default: doc_type.cc,
    })
    doc_type: doc_type;

    @Column()
    doc_number: number;

    @Column({ length: 30 })
    email: string; 

    @Column({ length: 15 })
    password: string;

    @Column({
        type: 'enum',
        enum: gender,
        default: gender.male,
    })
    gender: gender;

    @Column()
    phone: number;

    @Column()
    discapacity: boolean;

    @Column()
    opt_in: boolean;

    @Column()
    showName: boolean;

    @Column({ type: 'timestamp' })
    dob: Date;

    @Column({ length: 20 })
    preferences: string; 

    @Column({ length: 20 })
    address: string;

    @Column()
    city_id: number; 

    @Column()
    media_id: number; 

    @ManyToOne(type => Cities, city => city)
    city: Cities[];

    @OneToOne(type => Media, media => media)
    media: Media[];

    @OneToMany(type => Matches, match => match)
    match: Matches[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
