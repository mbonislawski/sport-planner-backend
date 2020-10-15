import { Injectable } from '@nestjs/common';
import { Plan } from '../entities/plan.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanDto } from './dto/create-plan.dto';
import { User } from '../entities/user.entity';
import { CreatePlanExerciseDto } from './dto/create-plan-exercise.dto'
import { PlanExercise } from '../entities/plan-exercise.entity'
import { Exercise } from '../entities/exercise.entity'

@Injectable()
export class PlansService {
    constructor (
        @InjectRepository(Plan)
        private readonly plansRepository: Repository<Plan>,

        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,

        @InjectRepository(PlanExercise)
        private planExerciseRepository: Repository<PlanExercise>,

        @InjectRepository(Exercise)
        private exerciseRepository: Repository<Exercise>,
    ) {}

    findAllPlans(): Promise<Plan[]> {
        return this.plansRepository.find();
    }

    findPlan(planId: string): Promise<Plan> {
        return this.plansRepository.findOne(planId);
    }

    async findPlanExercises(planId: string): Promise<PlanExercise[]> {
        return this.planExerciseRepository.find({where: {plan: planId}, relations: ['exercise']})
    }

    async createPlan(createPlanDto: CreatePlanDto): Promise<Plan> {
        const newPlan = new Plan();
        
        newPlan.dateStart = createPlanDto.dateStart ? createPlanDto.dateStart : new Date();
        newPlan.dateEnd = createPlanDto.dateEnd ? createPlanDto.dateEnd : null;
        newPlan.user = await this.usersRepository.findOne(createPlanDto.userId)

        return this.plansRepository.save(newPlan);
    }

    async createPlanExercise (planId: string, createPlanExerciseDto: CreatePlanExerciseDto): Promise<PlanExercise> {
        const newPlanExercise = new PlanExercise();

        newPlanExercise.plan = await this.plansRepository.findOne(planId);
        newPlanExercise.exercise = await this.exerciseRepository.findOne(createPlanExerciseDto.exerciseId);

        return this.planExerciseRepository.save(newPlanExercise);
    }
}
