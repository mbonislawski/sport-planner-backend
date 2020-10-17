import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entity/user.entity';

@Entity()
export class Goal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateStart: Date;

    @Column({ default: null })
    dateEnd: Date;

    @Column({ type: "float", default: null })
    kcal: number;

    @ManyToOne(() => User)
    @JoinColumn()
    user: User
}