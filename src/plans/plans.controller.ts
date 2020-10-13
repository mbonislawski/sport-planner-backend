import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { PlansService } from './plans.service'
import { Plan } from '../entities/plan.entity'


@Controller('plans')
export class PlansController {
    constructor(private readonly plansService: PlansService) {}

    @Post()
    create(@Body() createPlanDto: CreatePlanDto): Promise<Plan> {
        return this.plansService.createPlan(createPlanDto);
    }
}
