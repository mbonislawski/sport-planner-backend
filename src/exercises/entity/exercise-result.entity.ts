import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Exercise } from '../../exercises/entity/exercise.entity';

@Entity()
export class ExerciseResult {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: 0})
    sets: number;

    @Column({default: 0})
    reps: number;

    @Column({default: 0})
    weight: number;

    @ManyToOne(() => Exercise)
    @JoinColumn()
    exercise: Exercise
}