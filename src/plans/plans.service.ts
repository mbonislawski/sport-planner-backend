import { Injectable } from '@nestjs/common';
import { Plan } from './entity/plan.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanDto } from './dto/create-plan.dto';
import { User } from '../users/entity/user.entity';
import { Exercise } from '../exercises/entity/exercise.entity';

// plan-exercise
import { PlanExercise } from './entity/plan-exercise.entity';
import { CreatePlanExerciseDto } from './dto/create-plan-exercise.dto';

// plan-session
import { PlanSession } from './entity/plan-session.entity';
import { CreatePlanSessionDto } from './dto/create-plan-session.dto';

@Injectable()
export class PlansService {
    constructor (
        @InjectRepository(Plan)
        private readonly plansRepository: Repository<Plan>,

        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,

        @InjectRepository(Exercise)
        private exerciseRepository: Repository<Exercise>,

        @InjectRepository(PlanExercise)
        private planExerciseRepository: Repository<PlanExercise>,

        @InjectRepository(PlanSession)
        private planSessionRepository: Repository<PlanSession>,
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

    async createPlanExercise(planId: string, createPlanExerciseDto: CreatePlanExerciseDto): Promise<PlanExercise> {
        const newPlanExercise = new PlanExercise();

        newPlanExercise.plan = await this.plansRepository.findOne(planId);
        newPlanExercise.exercise = await this.exerciseRepository.findOne(createPlanExerciseDto.exerciseId);

        return this.planExerciseRepository.save(newPlanExercise);
    }

    async createPlanSession(planId: string, createPlanSessionDto: CreatePlanSessionDto): Promise<PlanSession> {
        const newPlanSession = new PlanSession();

        newPlanSession.plan = await this.plansRepository.findOne(planId);
        newPlanSession.date = createPlanSessionDto.date ? createPlanSessionDto.date : new Date();
        
        return this.planSessionRepository.save(newPlanSession);
    }
}
