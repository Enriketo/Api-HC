export enum match_status {
    accepted = 'accepted',
    rejected = 'rejected',
    pending = 'pending',
    denied = 'denied',
    created = 'created'
}

@Entity()
export class MatchEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    user_id: number; // [ref: > users.id]

    @Column({ length: 20 })
    employ_id: number; // [ref: > employees.id]

    @Column({
        type: 'enum',
        enum: match_status,
        default: match_status.pending,
    })
    type: match_status;

    @Column({ length: 20 })
    username: string; // [not null, unique]

    @Column({ length: 25 })
    order_approved: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}








