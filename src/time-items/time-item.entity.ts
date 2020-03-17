
@Entity()
export class TimeItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    name: string; 

    @Column({ length: 9 })
    cost: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
