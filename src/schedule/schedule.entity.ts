import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Unique
} from "typeorm";
import { Residences } from "../residences/residence.entity";
import { Meetings } from "../meetings/meet.entity";
import { Matches } from "../matches/match.entity";

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: "increment";

  @Column({ type: "timestamp" })
  startDate: Date;

  @Column({ type: "timestamp" })
  endDate: Date;

  @Column({ length: 25 }) //Address
  location: string;

  @Column()
  address: string;

  @Column()
  workerId: string;

  @Column()
  userId: string;

  @ManyToOne(
    type => Residences,
    residence => residence.id
  )
  residence: Residences[];

  @OneToOne(
    type => Meetings,
    meet => meet.id
  )
  meet: Meetings[];

  @OneToOne(
    type => Matches,
    match => match.id
  )
  match: Matches[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
