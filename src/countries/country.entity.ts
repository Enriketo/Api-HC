import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { States } from "../states/state.entity";

export enum continent {
    A = 'Africa',
    B = 'America',
    C = 'Asia',
    D = 'Europa',
    E = 'Oceanía'
}

@Entity()
export class Countries {
    @PrimaryGeneratedColumn()
    id: 'increment';
  
    @Column({ length: 25 })
    country: string;

    @Column({ length: 8 })
    isoCode2: string;
  
    @Column({ length: 8 })
    isoCode3: string;
    
    @Column({
        type: 'enum',
        enum: continent,
        default: continent.A,
    })
    location: continent; // json
      
    @Column({ length: 3 })
    phonePrefix: string;

    @OneToMany(type => States, state => state.id)
    states: States[]
  
    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;
  
    @UpdateDateColumn({type: 'timestamp'})
    updatedAt: Date;
}
