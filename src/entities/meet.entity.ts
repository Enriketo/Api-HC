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
import { Schedule } from "./schedule.entity";
import { Orders } from "./order.entity";

export enum meeting_status {
  pending = "pending",
  user_arrived = "userArrived",
  employee_arrived = "employeeArrived",
  on_process = "onProcess",
  finished = "finished"
}

@Entity()
export class Meetings {
  @PrimaryGeneratedColumn()
  id: "increment";

  @Column()
  userArrived: boolean;

  @Column()
  employeeArrived: boolean;

  @Column({
    type: "enum",
    enum: meeting_status,
    default: meeting_status.pending
  })
  status: meeting_status;

  @Column()
  employeeCalificationTime: number;

  @Column()
  employeeCalificationService: number;

  @Column({ length: 150 })
  employeeComent: string;

  @Column()
  workerName: string;

  @Column()
  destinyCalificationTime: number;

  @Column()
  destinyCalificationService: number;

  @Column({ length: 150 })
  destinyComent: string;

  @OneToOne(
    type => Schedule,
    schedule => schedule.id
  )
  schedule: Schedule[];

  @OneToOne(
    type => Orders,
    order => order.id
  )
  order: Orders[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
