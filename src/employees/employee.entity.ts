import {
  Column,
  CreateDateColumn,
  OneToOne,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Unique
} from "typeorm";
import { TimeItems } from "../time_items/time_item.entity";
import { Cities } from "../cities/city.entity";
import { Media } from "../media/media.entity";
import { Matches } from "../matches/match.entity";

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

export enum bank {
  bank1 = "Bancolombia",
  bank2 = "Davivienda",
  bank3 = "Colmena"
}

export enum status {
  online = "online",
  offline = "offline",
  disconected = "disconected"
}

export enum role {
  admin = "admin",
  worker = "worker",
  place = "room"
}

export enum penality {
  low = "low",
  middle = "middle",
  high = "high",
  none = "none"
}

@Entity()
@Unique(["username", "email"])
export class Employees {
  @PrimaryGeneratedColumn()
  id: "increment";

  @Column({ length: 20 })
  firstName: string;

  @Column({ length: 20 })
  lastName: string;

  @Column({ length: 12 })
  username: string;

  @Column({
    type: "enum",
    enum: doc_type,
    default: doc_type.cc
  })
  docType: doc_type;

  @Column()
  docNumber: number;

  @Column({ length: 30 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column()
  isAdmin: boolean;

  @Column({
    type: "enum",
    enum: gender,
    default: gender.male
  })
  gender: gender;

  @Column()
  showName: boolean;

  @Column({ length: 20 })
  preferences: string;

  @Column()
  discapacity: boolean;

  @Column()
  discapacityAcpt: boolean;

  @Column()
  address: string;

  @Column({ length: 30 })
  paymentCode: string;

  @Column({
    type: "enum",
    enum: bank,
    default: bank.bank1
  })
  bank: bank;

  @Column({
    type: "enum",
    enum: status,
    default: status.online
  })
  status: status;

  @Column({
    type: "enum",
    enum: role,
    default: role.admin
  })
  role: role;

  @Column()
  optIn: boolean;

  @Column()
  averageCalification: number;

  @Column({
    type: "enum",
    enum: penality,
    default: penality.low
  })
  penality: penality;

  @Column()
  totalPenalities: number;

  //    @Column({ length: 20 })
  //    timeItemId: string;

  @Column()
  recidence: number;

  @Column()
  mediaId: number;

  @Column()
  timeItemId: number;

  //    @ManyToOne(type => Cities, city => city.id)
  //    city: Cities[];

  //    @OneToOne(type => Media, media => media.id)
  //    media: Media[];
  //
  //    @OneToOne(type => TimeItems, id => id)
  //    timeItem: TimeItems[];

  //    @OneToMany(type => Matches, match => match.id)
  //    match: Matches[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
