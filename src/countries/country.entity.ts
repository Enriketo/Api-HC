import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { States } from "../states/state.entity";

@Entity()
export class Countries {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 25 })
    country: string;
  
    @OneToMany(type => States, state => state.country)
    states: States[]
  
    @Column({ length: 4 })
    iso_code2: string;
  
    @Column({ length: 4 })
    iso_code3: string;
  
    @Column({ length: 3 })
    phonePrefix: string;
  
    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;
  
    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}
