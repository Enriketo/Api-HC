import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique, OneToOne } from 'typeorm';
import { cities } from '../cities/city.entity';
import { media } from '../media/media.entity';

export enum doc_type {
    cc = 'cc',
    nit = 'nit',
    ce = 'ce'    
}

export enum gender {
    male = 'male',
    female = 'female',
    transexual_male = 'transexual_male',
    tramsexual_female = 'tramsexual_female',
    gay = 'gay',
    lesbian = 'lesbian',
    undefined = 'undefined'    
}


@Entity()
@Unique(["username", "email"])
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    first_name: string;

    @Column({ length: 20 })
    last_name: string;

    @Column({ length: 25 })
    username: string; // [not null, unique]

    @Column({
        type: 'enum',
        enum: doc_type,
        default: doc_type.cc,
    })
    doc_type: doc_type;

    @Column({ length: 12 })
    doc_number: number;

    @Column({ length: 25 })
    email: string; // [not null, unique]

    @Column({ length: 20 })
    password: string;// varbinary[not null]

    @Column({
        type: 'enum',
        enum: gender,
        default: gender.male,
    })
    gender: gender;

    @Column({ length: 12 })
    phone: number;

    @Column({ length: 25 })
    discapacity: boolean;

    @Column({ length: 1 })
    opt_in: boolean;

    @Column({ length: 1 })
    showName: boolean;

    @Column({ type: 'timestamp' })
    dob: Date;

    @Column({ length: 25 })
    preferences: string; // json

    @Column({ length: 30 })
    address: string;

    @Column({ length: 4 })
    city_id: number; // [ref: > cities.id]

    @Column({ length: 9 })
    media_id: number; // int[ref: > media.id]

    @ManyToOne(type => cities, city => city)
    city: cities;

    @OneToOne(type => media, media => media)
    media: media;    
    
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}