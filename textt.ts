import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CityEntity } from './src/cities/city.entity';
import { UserEntity } from './src/users/user.entity';
import { OrderEntity } from './src/orders/order.entity';

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

  @ManyToOne(type => CityEntity, city => city)
  City: CityEntity;

  @ManyToOne(type => UserEntity, user => user)
  User: UserEntity;

  @OneToMany(type => OrderEntity, order => order)
  Order: OrderEntity;

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updatedAt: Date;
}
