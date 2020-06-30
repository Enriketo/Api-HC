import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Residences } from "../residences/residence.entity";
import { Meetings } from '../meetings/meet.entity';
import { Matches } from '../matches/match.entity';

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id: 'increment';

    @Column()
    matchId: number; 

    @Column({ type: 'timestamp' })
    startDate: Date;

    @Column({ type: 'timestamp' })
    endDate: Date;

    @Column()
    residencesId: number; 

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
