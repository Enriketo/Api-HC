import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StateEntity } from "../states/state.entity";


@Entity()
export class CountryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    country: string;

    @Column({ length: 10 })
    code: string;

    @Column({ length: 10 })
    iso_code2: string;

    @Column({ length: 10 })
    iso_code3: string;

    @Column({ length: 20 })
    location: string; // json

    @Column({ length: 10 })
    prefix: number;

    @OneToMany(type => StateEntity, state => state.country)
    State: StateEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}