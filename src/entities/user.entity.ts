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
  @PrimaryGeneratedColumn('uuid')
  id: 'increment';

  @Column({ length: 20, nullable: true, default: 'Unknown'})
  firstName: string;

  @Column({ length: 20, nullable: true, default: 'Unknown' })
  lastName: string;

  @Column({ length: 12, nullable: true, default: 'Unknown' })
  username: string;

  @Column({ length: 30 })
  email: string;

  @Column({ length: 255 })
  password: string;
  
  @Column({ nullable: true })
  token: string; // Token para restablecimiento de contraseña

  @Column({ nullable: true })
  tokenExpires: Date; // Fecha de expiración del token de restablecimiento

  @Column({
    type: "enum",
    enum: gender,
    default: gender.male
  })
  gender: gender;

  @Column({nullable: true, default: 0})
  phone: number;

  @Column({ default: false })
  discapacity: boolean;

  @Column({ default: false })
  optIn: boolean;

  @Column({ default: false })
  showName: boolean;

  @Column({ type: "timestamp", nullable: true })
  dob: Date;

  @Column({ length: 20, nullable: true, default: 'unknown' })
  preferences: string;

  @Column({ length: 20, nullable: true, default: 'Unknown' })
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
