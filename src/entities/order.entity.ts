import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Meetings } from "./meet.entity";
import { Matches } from "./match.entity";

export enum payment_type {
  cash = "cash",
  credit_card = "creditCard",
  debit_card = "debitCard"
}

export enum order_status {
  approved = "approved",
  rejected = "rejected",
  denied = "denied",
  pending = "pending"
}

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: "increment";

  @Column()
  price: number;

  @Column({
    type: "enum",
    enum: payment_type,
    default: payment_type.cash
  })
  pay: payment_type;

  @Column({
    type: "enum",
    enum: order_status,
    default: order_status.approved
  })
  orderStatus: order_status;

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
