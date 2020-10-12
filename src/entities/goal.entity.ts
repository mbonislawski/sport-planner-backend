import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Goal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateStart: Date;

    @Column()
    dateEnd: Date;

    @Column({ type: "float", default: null })
    kcal: number;

    @ManyToOne(() => User)
    @JoinColumn()
    user: User
}