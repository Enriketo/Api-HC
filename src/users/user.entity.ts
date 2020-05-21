import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { CityEntity } from '../cities/city.entity';
import { MediaEntity } from '../media/media.entity';
import { MatchEntity} from '../matches/match.entity';

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
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    username: string; // [not null, unique]

    @Column({
        type: 'enum',
        enum: doc_type,
        default: doc_type.cc,
    })
    doc_type: doc_type;

    @Column()
    doc_number: number;

    @Column()
    email: string; // [not null, unique]

    @Column()
    password: string;// varbinary[not null]

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

    @Column()
    preferences: string; // json

    @Column()
    address: string;

    @Column()
    city_id: number; // [ref: > cities.id]

    @Column()
    media_id: number; // int[ref: > media.id]

    @ManyToOne(type => CityEntity, city => city)
    City: CityEntity[];

    @OneToOne(type => MediaEntity, media => media)
    Media: MediaEntity[];

    @OneToMany(type => MatchEntity, match => match)
    Match: MatchEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
