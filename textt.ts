import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Cities } from '../cities/city.entity';
import { Users } from '../users/user.entity';
import { Orders } from '../orders/order.entity';

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

  @ManyToOne(type => Cities, city => city.addresses)
  city: Cities;

  @ManyToOne(type => Users, user => user.addresses)
  user: Users;

  @OneToMany(type => Orders, order => order.address)
  orders: Users;

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updatedAt: Date;
}
