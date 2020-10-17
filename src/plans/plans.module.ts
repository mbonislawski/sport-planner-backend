import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from './entity/plan.entity'
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';
import { User } from '../users/entity/user.entity';
import { PlanExercise } from './entity/plan-exercise.entity';
import { Exercise } from '../exercises/entity/exercise.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Plan, User, Exercise, PlanExercise])],
    providers: [PlansService],
    controllers: [PlansController],
})
export class PlansModule {}
