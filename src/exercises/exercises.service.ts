import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from '../entities/exercise.entity'
import { CreateExerciseDto } from './dto/create-exercise.dto'
import { PlanExercise } from '../entities/plan-exercise.entity'
import { CreatePlanExerciseDto } from './dto/create-plan-exercise.dto'
import { Plan } from '../entities/plan.entity';

@Injectable()
export class ExercisesService {
    constructor (
        @InjectRepository(Plan)
        private plansRepository: Repository<Plan>,

        @InjectRepository(Exercise)
        private exerciseRepository: Repository<Exercise>,

        @InjectRepository(PlanExercise)
        private planExerciseRepository: Repository<PlanExercise>
    ) {}

    createExercise (createExerciseDto: CreateExerciseDto): Promise<Exercise> {
        const newExercise = new Exercise();

        newExercise.name = createExerciseDto.name;
        newExercise.sets = createExerciseDto.sets;
        newExercise.reps = createExerciseDto.reps;

        return this.exerciseRepository.save(newExercise);
    }

    async createPlanExercise (createPlanExerciseDto: CreatePlanExerciseDto): Promise<PlanExercise> {
        const newPlanExercise = new PlanExercise();

        newPlanExercise.plan = await this.plansRepository.findOne(createPlanExerciseDto.planId);
        newPlanExercise.exercise = await this.exerciseRepository.findOne(createPlanExerciseDto.exerciseId);

        return this.planExerciseRepository.save(newPlanExercise);
    }
}
