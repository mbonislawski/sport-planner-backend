import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './entity/exercise.entity'
import { CreateExerciseDto } from './dto/create-exercise.dto';

import { CreateExerciseResultDto } from './dto/create-exercise-result.dto';
import { ExerciseResult } from './entity/exercise-result.entity';

@Injectable()
export class ExercisesService {
    constructor (
        @InjectRepository(Exercise)
        private exerciseRepository: Repository<Exercise>,

        @InjectRepository(ExerciseResult)
        private exerciseResultRepository: Repository<ExerciseResult>,
    ) {}

    createExercise (createExerciseDto: CreateExerciseDto): Promise<Exercise> {
        const newExercise = new Exercise();

        newExercise.name = createExerciseDto.name;
        newExercise.sets = createExerciseDto.sets;
        newExercise.reps = createExerciseDto.reps;

        return this.exerciseRepository.save(newExercise);
    }

    async createExerciseResult (createExerciseResultDto: CreateExerciseResultDto): Promise<ExerciseResult> {
        const newExerciseResult = new ExerciseResult();

        newExerciseResult.exercise = await this.exerciseRepository.findOne(createExerciseResultDto.exerciseId);
        newExerciseResult.sets = createExerciseResultDto.sets;
        newExerciseResult.reps = createExerciseResultDto.reps;
        newExerciseResult.weight = createExerciseResultDto.weight;

        return this.exerciseResultRepository.save(newExerciseResult);
    }
}
