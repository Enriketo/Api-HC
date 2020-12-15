import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique, OneToOne } from 'typeorm';
import { Residences } from 'src/residences/residence.entity';
import { Users } from "../users/user.entity";
import { Employees } from "../employees/employee.entity";


export enum type {
    avatar = 'avatar',
    profile = 'profile',
    gif = 'gif',
    loop = 'loop'
}

@Entity()
export class Media {
    @PrimaryGeneratedColumn()
    id: 'increment';

    @Column({
        type: 'enum',
        enum: type,
        default: type.avatar,
    })
    type: type;

    @Column({ length: 15 })
    format: string;

    @Column({ length: 200 })
    url: string;

    @Column({ length: 200 })
    documentA: string;

    @Column({ length: 200 })
    documentB: string;

    @Column({ length: 200 })
    urlB: string;

    @Column({ length: 200 })
    urlC: string;

    @Column({ length: 200 })
    urlD: string;

    @Column({ length: 200 })
    urlV: string;

    @OneToOne(type => Residences, residence => residence.id)
    residence: Residences[];

    @OneToOne(type => Users, user => user.id)
    user: Users[];

    @OneToOne(type => Employees, employee => employee.id)
    employee: Users[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}