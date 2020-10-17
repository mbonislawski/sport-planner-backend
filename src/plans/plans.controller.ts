import { Body, Controller, Post, Param, Get } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { PlansService } from './plans.service'
import { Plan } from './entity/plan.entity'

// plan exercise
import { PlanExercise } from './entity/plan-exercise.entity';
import { CreatePlanExerciseDto } from '../plans/dto/create-plan-exercise.dto';

// plan session
import { PlanSession } from './entity/plan-session.entity';
import { CreatePlanSessionDto } from './dto/create-plan-session.dto';

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

    @Post()
    create(@Body() createPlanDto: CreatePlanDto): Promise<Plan> {
        return this.plansService.createPlan(createPlanDto);
    }

    // ----------- plan-exercises table methods -------------
    @Get('plan-exercises/:id')
    getPlanEvercises(@Param('id') id: string): Promise<PlanExercise[]> {
        return this.plansService.findPlanExercises(id);
    }

    @Post('plan-exercise/:id')
    createPlanExercise(@Param('id') id: string, @Body() createPlanExerciseDto: CreatePlanExerciseDto): Promise<PlanExercise> {
      return this.plansService.createPlanExercise(id, createPlanExerciseDto);
    }

    @Post('plan-session/:id')
    createPlanSession(@Param('id') id: string, @Body() createPlanSessionDto: CreatePlanSessionDto): Promise<PlanSession> {
      return this.plansService.createPlanSession(id, createPlanSessionDto);
    }
}
