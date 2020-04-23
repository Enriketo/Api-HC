import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { ResidenceEntity } from "../residences/residence.entity";
import { MeetingEntity } from '../meetings/meeting.entity';
import { MatchEntity } from '../matches/match.entity';

@Entity()
export class ScheduleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 9 })
    match_id: number; // [ref: > matches.id]

    @Column({ type: 'timestamp' })
    start_date: Date;

    @Column({ type: 'timestamp' })
    end_date: Date;

    @Column({ length: 100 })
    residences_id: number; //  [ref: > residences.id]

    @Column({ length: 20 })
    location: string; //json

    @Column({ length: 30 })
    address: string;

    @ManyToOne(type => ResidenceEntity, residence => residence)
    Residence: ResidenceEntity[];

    @OneToOne(type => MeetingEntity, meeting => meeting)
    Meeting: MeetingEntity[];

    @OneToOne(type => MatchEntity, match => match)
    Match: MatchEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
