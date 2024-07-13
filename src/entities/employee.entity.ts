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
import { TimeItems } from "./time_item.entity";
import { Cities } from "./city.entity";
import { Media } from "./media.entity";
import { Matches } from "./match.entity";

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

@Entity('employees')
@Unique(["username", "email"])
export class Employees {
  @PrimaryGeneratedColumn('uuid')
  id: 'increment';

  @Column({ length: 20, nullable: true, default: 'Unknown'})
  firstName: string;

  @Column({ length: 20, nullable: true, default: 'Unknown' })
  lastName: string;

  @Column({ length: 12, nullable: true, default: 'Unknown' })
  username: string;

  @Column({
    type: "enum",
    enum: doc_type,
    default: doc_type.cc,
    nullable: true, 
  })
  docType: doc_type;

  @Column({ nullable: true, default: 0 })
  docNumber: number;

  @Column({ length: 30 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ nullable: true })
  token: string; // Token para restablecimiento de contraseña

  @Column({ nullable: true })
  tokenExpires: Date; // Fecha de expiración del token de restablecimiento

  @Column({ nullable: true, default: false })
  isAdmin: boolean;

  @Column({
    type: "enum",
    enum: gender,
    default: gender.male,
    nullable: true
  })
  gender: gender;

  @Column({ nullable: true, default: false})
  showName: boolean;

  @Column({ length: 20, nullable: true, default: 'Unknown' })
  preferences: string;

  @Column({ nullable: true, default: false })
  discapacity: boolean;

  @Column({ nullable: true, default: false })
  discapacityAcpt: boolean;

  @Column({ nullable: true, default: 'Unknown' })
  address: string;

  @Column({ length: 255, nullable: true, default: 'Unknown' })
  paymentCode: string;

  @Column({
    type: "enum",
    enum: bank,
    default: bank.bank1,
    nullable: true
  })
  bank: bank;

  @Column({ nullable: true, default: false })
  status: boolean;
  
  //@Column({//cambiar a bolean 
  //  type: "enum",//crear endpoint 
  //  enum: status,
  //  default: status.online
  //})
  //status: status;

  @Column({
    type: "enum",
    enum: role,
    default: role.admin,
    nullable: true
  })
  role: role;

  @Column({ nullable: true, default: false })
  optIn: boolean;

  @Column({ nullable: true, default: 0 })
  averageCalification: number;//controlador para esto 

  @Column({
    type: "enum",
    enum: penality,
    default: penality.low,
    nullable: true
  })
  penality: penality;

  @Column({ nullable: true, default: 0 })
  totalPenalities: number;

  @Column({ nullable: true, default: 0 })
  recidence: number;

  @Column({ nullable: true, default: 0 })
  mediaId: number;

  @Column({ nullable: true, default: 0 })
  timeItemId: number;

  @ManyToOne(type => Cities, city => city.id)
  city: Cities[];

  @OneToOne(type => Media, media => media.id)
  media: Media[];
  
  @OneToOne(type => TimeItems, id => id)
  timeItem: TimeItems[];

  @OneToMany(type => Matches, match => match.id)
  match: Matches[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
