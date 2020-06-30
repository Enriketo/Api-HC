import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Cities } from '../cities/city.entity';
import { Media } from '../media/media.entity';
import { Matches } from '../matches/match.entity';

export enum doc_type {
    cc = 'C.C.',
    nit = 'NIT',
    ce = 'C.E.'
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
    id: 'increment';

    @Column({ length: 20 })
    firstName: string;

    @Column({ length: 20 })
    lastName: string;

    @Column({ length: 15 })
    username: string; 

    @Column({
        type: 'enum',
        enum: doc_type,
        default: doc_type.cc,
    })
    docType: doc_type;

    @Column()
    docNumber: number;

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
    optIn: boolean;

    @Column()
    showName: boolean;

    @Column({ type: 'timestamp' })
    dob: Date;

    @Column({ length: 20 })
    preferences: string; 

    @Column({ length: 20 })
    address: string;

    @Column()
    cityId: number; 

    @Column()
    mediaId: number; 

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
