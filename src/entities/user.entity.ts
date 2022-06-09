import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Unique
} from "typeorm";
import { Cities } from "./city.entity";
import { Media } from "./media.entity";
import { Matches } from "../entities/match.entity";

export enum doc_type {
  cc = "C.C.",
  nit = "NIT",
  ce = "C.E."
}

export enum gender {
  male = "male",
  female = "female",
  tx_male = "transexual male",
  tx_female = "tramsexual female",
  gay = "gay",
  lesbian = "lesbian",
  undefined = "undefined"
}

@Entity('users')
@Unique(["username", "email"])
export class Users {
  @PrimaryGeneratedColumn()
  id: "increment";

  @Column({ length: 20 })
  firstName: string;

  @Column({ length: 20 })
  lastName: string;

  @Column({ length: 15 })
  username: string;

  @Column({ length: 30 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({
    type: "enum",
    enum: gender,
    default: gender.male
  })
  gender: gender;

  @Column()
  phone: number;

  @Column()
  discapacity: boolean;

  @Column()
  optIn: boolean;

  @Column()
  showName: boolean;

  @Column({ type: "timestamp" })
  dob: Date;

  @Column({ length: 20 })
  preferences: string;

  @Column({ length: 20 })
  address: string;

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
    type => Matches,
    match => match.id
  )
  match: Matches[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
