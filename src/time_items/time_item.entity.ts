import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { EmployEntity } from "../employees/employ.entity";

@Entity()
export class TimeItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    name: string;

    @Column({ length: 9 })
    cost: number;

    @OneToMany(type => EmployEntity, employ => employ.id)
    Employ: EmployEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
