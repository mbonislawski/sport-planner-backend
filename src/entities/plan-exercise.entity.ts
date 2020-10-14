import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Plan } from './plan.entity';
import { Exercise } from './exercise.entity';

@Entity()
export class PlanExercise {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Plan)
    @JoinColumn()
    plan: Plan

    @ManyToOne(() => Exercise)
    @JoinColumn()
    exercise: Exercise
}