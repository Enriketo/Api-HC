import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique, OneToOne } from 'typeorm';
import { ResidenceEntity } from 'src/residences/residence.entity';
import { UserEntity } from "../users/user.entity";
import { EmployEntity } from "../employees/employ.entity";
import { from } from 'rxjs';

export enum type {
    avatar = 'avatar',
    profile = 'profile',
    gif = 'gif',
    loop = 'loop'// 5 Seconds
}

@Entity()
export class MediaEntity {
    @PrimaryGeneratedColumn()
    id: number;

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

    @OneToOne(type => ResidenceEntity, residence => residence)
    Residence: ResidenceEntity[];

    @OneToOne(type => UserEntity, user => user.id)
    User: UserEntity[];

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}