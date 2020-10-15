import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from '../entities/plan.entity'
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';
import { User } from '../entities/user.entity';
import { PlanExercise } from '../entities/plan-exercise.entity';
import { Exercise } from '../entities/exercise.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Plan, User, Exercise, PlanExercise])],
    providers: [PlansService],
    controllers: [PlansController],
})
export class PlansModule {}
