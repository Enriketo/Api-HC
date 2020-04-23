import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { CityEntity } from '../cities/city.entity';
import { MediaEntity } from '../media/media.entity';
import { ScheduleEntity } from '../schedule/schedule.entity';

@Entity()
@Unique(["email"])
export class ResidenceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 9 })
    city_id : number; // [ref: > cities.id]

    @Column({ length: 25 })
    email: string; // [not null]

    @Column({ length: 20 })
    name: string;

    @Column({ length: 20 })
    location: number; // [increment]

    @Column({ length: 40 })
    address: string;

    @Column({ length: 1 })
    place_avalaible: boolean;

    @Column({ length: 9 })
    media_id: number; // [ref: > media.id]

    @ManyToOne(type => CityEntity, city => city)
    States: CityEntity[];

    @OneToOne(type => MediaEntity, media => media)
    Media: MediaEntity[];

    @OneToMany(type => ScheduleEntity, schedule => schedule)
    Schedule: ScheduleEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}