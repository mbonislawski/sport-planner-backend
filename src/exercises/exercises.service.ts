import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from '../entities/exercise.entity'
import { CreateExerciseDto } from './dto/create-exercise.dto'

@Injectable()
export class ExercisesService {
    constructor (
        @InjectRepository(Exercise)
        private exerciseRepository: Repository<Exercise>
    ) {}

    createExercise (createExerciseDto: CreateExerciseDto): Promise<Exercise> {
        const newExercise = new Exercise();
        
        newExercise.name = createExerciseDto.name;
        newExercise.sets = createExerciseDto.sets;
        newExercise.reps = createExerciseDto.reps;

        return this.exerciseRepository.save(newExercise);
    }
}
