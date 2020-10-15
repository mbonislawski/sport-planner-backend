import { Body, Controller, Post, Put, Param, Get } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { PlansService } from './plans.service'
import { Plan } from '../entities/plan.entity'
import { CreatePlanExerciseDto } from '../plans/dto/create-plan-exercise.dto';
import { PlanExercise } from '../entities/plan-exercise.entity';

@Controller('plans')
export class PlansController {
    constructor(private readonly plansService: PlansService) {}

    @Get()
    getAllPlans(): Promise <Plan[]> {
        return this.plansService.findAllPlans();
    }

    @Get(':id')
    getPlan(@Param('id') id: string): Promise<Plan> {
        return this.plansService.findPlan(id);
    }

    @Get('plan-exercises/:id')
    getPlanEvercises(@Param('id') id: string): Promise<PlanExercise[]> {
        return this.plansService.findPlanExercises(id);
    }

    @Post()
    create(@Body() createPlanDto: CreatePlanDto): Promise<Plan> {
        return this.plansService.createPlan(createPlanDto);
    }

    @Put(':id')
    addTrainer(@Param('id') id: string, @Body() createPlanExerciseDto: CreatePlanExerciseDto): Promise<PlanExercise> {
      return this.plansService.createPlanExercise(id, createPlanExerciseDto);
    }
}
