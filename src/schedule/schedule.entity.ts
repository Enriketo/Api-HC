
@Entity()
export class ScheduleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 9 })
    match_id: number; // [ref: > matches.id]

    @Column({ type: 'timestamp' })
    start_date: Date;

    @Column({ type: 'timestamp' })
    end_date: Date;

    @Column({ length: 100 })
    residences_id: number; //  [ref: > residences.id]

    @Column({ length: 20 })
    location: string; //json

    @Column({ length: 30 })
    address: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}