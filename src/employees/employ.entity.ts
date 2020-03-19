import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { TimeItems } from '../time-items/time-item.entity';
import { Cities } from '../cities/city.entity';
import { Media } from '../media/media.entity';

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
export class EmployEntity {
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

    @Column({ length: 25 })
    password: string;// varbinary[not null]

    @Column({ length: 1 })
    isAdmin: boolean;

    @Column({
        type: 'enum',
        enum: gender,
        default: gender.male,
    })
    gender: gender;

    @Column({ length: 1 })
    showName: boolean;

    @Column({ length: 25 })
    preferences: string; // json

    @Column({ length: 1 })
    discapacity: boolean;

    @Column({ length: 25 })
    discapacity_acpt: boolean;

    @Column({ length: 25 })
    time_item_id: number; // [ref: > time_items.id]

    @Column({ length: 4 })
    city_id: number; // [ref: > cities.id]

    @Column({ length: 30 })
    address: string;

    @Column({ length: 30 })
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

    @Column({ length: 1 })
    opt_in: boolean;

    @Column({ length: 1 })
    average_calification: number; // float

    @Column({
        type: 'enum',
        enum: penality,
        default: penality.low,
    })
    penality: penality;

    @Column({ length: 3 })
    total_penalities: number;

    @Column({ length: 9 })
    media_id: number; // int[ref: > media.id]

    @OneToMany(type => TimeItems, id => id)
    timeItem: TimeItems;

    @ManyToOne(type => Cities, city => city)
    city: Cities;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @OneToOne(type => Media, media => media)
    media: Media;    

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}
