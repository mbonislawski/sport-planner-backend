import { Module } from '@nestjs/common';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { Exercise } from './entity/exercise.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseResult } from './entity/exercise-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, ExerciseResult])],
  controllers: [ExercisesController],
  providers: [ExercisesService]
})
export class ExercisesModule {}
