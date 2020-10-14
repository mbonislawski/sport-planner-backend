import { Module } from '@nestjs/common';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { Exercise } from '../entities/exercise.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from '../entities/plan.entity'
import { PlanExercise } from '../entities/plan-exercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, PlanExercise, Plan])],
  controllers: [ExercisesController],
  providers: [ExercisesService]
})
export class ExercisesModule {}
