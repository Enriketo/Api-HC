import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { CityEntity } from '../cities/city.entity';
import { MediaEntity } from '../media/media.entity';
import { ScheduleEntity } from '../schedule/schedule.entity';

@Entity()
@Unique(["email"])
export class ResidenceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city_id : number; // [ref: > cities.id]

    @Column()
    email: string; // [not null]

    @Column()
    name: string;

    @Column()
    location: number; // [increment]

    @Column()
    address: string;

    @Column()
    place_avalaible: boolean;

    @Column()
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
