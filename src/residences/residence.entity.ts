import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Unique
} from "typeorm";
import { Cities } from "../cities/city.entity";
import { Media } from "../media/media.entity";
import { Schedule } from "../schedule/schedule.entity";

@Entity()
@Unique(["email"])
export class Residences {
  @PrimaryGeneratedColumn()
  id: "increment";

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

  @ManyToOne(
    type => Cities,
    city => city.id
  )
  city: Cities[];

  @OneToOne(
    type => Media,
    media => media.id
  )
  media: Media[];

  @OneToMany(
    type => Schedule,
    schedule => schedule.id
  )
  schedule: Schedule[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
