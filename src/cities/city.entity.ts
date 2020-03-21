import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StateEntity } from '../states/state.entity';

@Entity()
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 4 })
    state_id: number; // [ref: > states.id] //

    @Column({ length: 30 })
    city: string;

    @Column({ length: 10 })
    code: string;

    @Column({ length: 10 })
    iso_code2: string;

    @Column({ length: 10 })
    iso_code3: string;

    @Column({ length: 20 })
    location: string;

    @ManyToOne(type => StateEntity, state => state)
    States: StateEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
