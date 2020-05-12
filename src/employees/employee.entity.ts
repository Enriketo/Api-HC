import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { TimeItemEntity } from '../time_items/time_item.entity';
import { CityEntity } from '../cities/city.entity';
import { MediaEntity } from '../media/media.entity';
import { MatchEntity } from '../matches/match.entity';

export enum doc_type {
    cc = 'Cédula de ciudadanía',
    nit = 'Número de indentificación tributaria',
    ce = 'Cédula de extranjería'
}

export enum gender {
    male = 'male',
    female = 'female',
    tx_male = 'transexual_male',
    tx_female = 'tramsexual_female',
    gay = 'gay',
    lesbian = 'lesbian',
    undefined = 'undefined'
}

export enum bank {
    bank1 = 'Bancolombia',
    bank2 = 'Davivienda',
    bank3 = 'Colmena'
}

export enum status {
    online = 'online',
    offline = 'offline',
    disconected = 'disconected'
}

export enum role {
    admin = 'admin',
    worker = 'worker',
    place = 'place'
}

export enum penality {
    low = 'low',
    middle = 'middle',
    high = 'high'
}

@Entity()
@Unique(["username", "email"])

export class EmployeeEntity {
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

    @Column()
    isAdmin: boolean;

    @Column({
        type: 'enum',
        enum: gender,
        default: gender.male,
    })
    gender: gender;

    @Column()
    showName: boolean;

    @Column()
    preferences: string; // json

    @Column()
    discapacity: boolean;

    @Column()
    discapacity_acpt: boolean;

    @Column()
    time_item_id: number; // [ref: > time_items.id]

    @Column()
    city_id: number; // [ref: > cities.id]

    @Column()
    address: string;

    @Column()
    payment_code: string;

    @Column({
        type: 'enum',
        enum: bank,
        default: bank.bank1,
    })
    bank: bank;

    @Column({
        type: 'enum',
        enum: status,
        default: status.online,
    })
    status: status;

    @Column({
        type: 'enum',
        enum: role,
        default: role.admin,
    })
    role: role;

    @Column()
    opt_in: boolean;

    @Column()
    average_calification: number; // float

    @Column({
        type: 'enum',
        enum: penality,
        default: penality.low,
    })
    penality: penality;

    @Column()
    total_penalities: number;

    @Column()
    media_id: number; // int[ref: > media.id]

    @ManyToOne(type => CityEntity, city => city)
    city: CityEntity[];

    @ManyToOne(type => MediaEntity, media => media)
    media: MediaEntity[];

    @ManyToOne(type => TimeItemEntity, id => id)
    timeItem: TimeItemEntity[];

    @OneToMany(type => MatchEntity, match => match)
    Match: MatchEntity[];

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}
