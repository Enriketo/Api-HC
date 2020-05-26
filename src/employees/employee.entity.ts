import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { TimeItems } from '../time_items/time_item.entity';
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

export class Employees {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    first_name: string;

    @Column({ length: 20 })
    last_name: string;

    @Column({ length: 12 })
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

    @Column({ length: 20 })
    preferences: string; 

    @Column()
    discapacity: boolean;

    @Column()
    discapacity_acpt: boolean;

    @Column()
    time_item_id: number; 

    @Column()
    city_id: number; 

    @Column()
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

    @Column()
    opt_in: boolean;

    @Column()
    average_calification: number; 

    @Column({
        type: 'enum',
        enum: penality,
        default: penality.low,
    })
    penality: penality;

    @Column()
    total_penalities: number;

    @Column()
    media_id: number; 

    @ManyToOne(type => Cities, city => city)
    city: Cities[];

    @ManyToOne(type => Media, media => media)
    media: Media[];

    @ManyToOne(type => TimeItems, id => id)
    timeItem: TimeItems[];

    @OneToMany(type => Matches, match => match)
    Match: Matches[];

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}
