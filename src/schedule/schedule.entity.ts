import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Residences } from "../residences/residence.entity";
import { Meetings } from '../meetings/meet.entity';
import { Matches } from '../matches/match.entity';

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    match_id: number; 

    @Column({ type: 'timestamp' })
    start_date: Date;

    @Column({ type: 'timestamp' })
    end_date: Date;

    @Column()
    residences_id: number; 

    @Column({ length: 25 }) //Address
    location: string; 

    @Column()
    address: string;

    @ManyToOne(type => Residences, residence => residence)
    Residence: Residences[];

    @OneToOne(type => Meetings, meet  => meet.id)
    meet: Meetings[];

    @OneToOne(type => Matches, match => match)
    match: Matches[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
