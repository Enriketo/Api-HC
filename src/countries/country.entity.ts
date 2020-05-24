import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StateEntity } from "../states/state.entity";


@Entity()
export class Countries {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    code: string;

    @Column()
    iso_code2: string;

    @Column()
    iso_code3: string;

    @Column()
    location: string; // json

    @Column()
    prefix: number;

    @OneToMany(type => StateEntity, state => state.country)
    State: StateEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
