import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    Unique,
    OneToOne
} from 'typeorm';
import { EmployEntity } from "../employees/employ.entity";

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

    @OneToOne(type => EmployEntity, employ => employ)
    media: EmployEntity[];


    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
