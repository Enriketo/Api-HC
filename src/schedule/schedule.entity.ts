import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { ResidenceEntity } from "../residences/residence.entity";
import { MeetEntity } from '../meetings/meet.entity';
import { MatchEntity } from '../matches/match.entity';

@Entity()
export class ScheduleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    match_id: number; // [ref: > matches.id]

    @Column({ type: 'timestamp' })
    start_date: Date;

    @Column({ type: 'timestamp' })
    end_date: Date;

    @Column()
    residences_id: number; //  [ref: > residences.id]

    @Column()
    location: string; //json

    @Column()
    address: string;

    @ManyToOne(type => ResidenceEntity, residence => residence)
    Residence: ResidenceEntity[];

    @OneToOne(type => MeetEntity, meet  => meet.id)
    Meet: MeetEntity[];

    @OneToOne(type => MatchEntity, match => match)
    Match: MatchEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
