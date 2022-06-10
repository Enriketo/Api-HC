import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Cities } from './src/entities/city.entity';
import { Users } from './src/entities/user.entity';
import { Orders } from './src/entities/order.entity';

export enum addressType {
  BILLING = 'billing',
  SHIPPING = 'SHIPPING',
}

@Entity()
export class Addresses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;

  @Column({ length: 25 })
  address: string;

  @Column({
    type: 'enum',
    enum: addressType,
    default: addressType.BILLING,
  })
  type: addressType;

  @Column({ length: 25 })
  cellphone: string;

  @ManyToOne(type => Cities, city => city)
  city: Cities;

  @ManyToOne(type => Users, user => user)
  user: Users;

  @OneToMany(type => Orders, order => order)
  order: Orders;

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updatedAt: Date;
}
