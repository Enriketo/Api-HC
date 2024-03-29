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
import { Users } from "./user.entity";
import { Employees } from "./employee.entity";
import { Schedule } from "./schedule.entity";

export enum match_status {
  accepted = "accepted",
  rejected = "rejected",
  pending = "pending",
  denied = "denied",
  created = "created"
}

@Entity()
export class Matches {
  @PrimaryGeneratedColumn()
  id: "increment";

  @Column({
    type: "enum",
    enum: match_status,
    default: match_status.pending
  })
  status: match_status;

  @Column()
  username: string;

  @Column()
  workername: string;

  @Column()
  orderApproved: boolean;

  @ManyToOne(
    type => Users,
    user => user.id
  )
  user: Users[];

  @ManyToOne(
    type => Employees,
    employee => employee.id
  )
  employee: Employees[];

  @OneToOne(
    type => Schedule,
    schedule => schedule.id
  )
  schedule: Schedule[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
