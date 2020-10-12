import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Measurement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column({ type: "float", default: null })
    weight: number;

    @Column({ type: "float", default: null })
    arm: number;
    
    @Column({ type: "float", default: null })
    chest: number;

    @Column({ type: "float", default: null })
    thigh: number;

    @Column({ type: "float", default: null })
    calf: number;

    @Column({ type: "float", default: null })
    hips: number;

    @Column({ type: "float", default: null })
    waist: number;

    @ManyToOne(() => User)
    @JoinColumn()
    user: User
}