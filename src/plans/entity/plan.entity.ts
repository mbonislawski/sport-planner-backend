import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entity/user.entity';

@Entity()
export class Plan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateStart: Date;

    @Column({ default: null })
    dateEnd: Date;

    @ManyToOne(() => User)
    @JoinColumn()
    user: User
}