import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Cities } from '../cities/city.entity';
import { Media } from '../media/media.entity';

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

    @ManyToOne(type => Cities, city => city)
    city: Cities;

    @OneToOne(type => Media, media => media)
    media: Media;    

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}




