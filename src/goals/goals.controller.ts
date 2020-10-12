import { Body, Controller, Post } from '@nestjs/common';
import { CreateGoalDto } from './dto/create-goal.dto';
import { GoalsService } from './goals.service'
import { Goal } from '../entities/goal.entity'

@Controller('goals')
export class GoalsController {
    constructor(private readonly goalsService: GoalsService) {}

    @Post()
    create(@Body() createGoalDto: CreateGoalDto): Promise<Goal> {
        return this.goalsService.createGoal(createGoalDto);
    }
}
