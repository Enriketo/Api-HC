import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Cities } from '../cities/city.entity';
import { Media } from '../media/media.entity';
import { Schedule } from '../schedule/schedule.entity';

@Entity()
@Unique(["email"])
export class Residences {
    @PrimaryGeneratedColumn()
    id: 'increment';

    @Column()
    cityId : number; 

    @Column()
    email: string; 

    @Column()
    name: string;

    @Column()
    location: number; 

    @Column()
    address: string;

    @Column()
    placeAvalaible: boolean;

    @Column()
    mediaId: number; 

    @ManyToOne(type => Cities, city => city)
    states: Cities[];

    @OneToOne(type => Media, media => media)
    media: Media[];

    @OneToMany(type => Schedule, schedule => schedule)
    schedule: Schedule[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
