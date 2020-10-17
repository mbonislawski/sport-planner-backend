import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Plan } from './plan.entity';

@Entity()
export class PlanSession {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date
    
    @ManyToOne(() => Plan)
    @JoinColumn()
    plan: Plan
}