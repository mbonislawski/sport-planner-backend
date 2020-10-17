import { Body, Controller, Post } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto'
import { Exercise } from './entity/exercise.entity'
import { CreateExerciseResultDto } from './dto/create-exercise-result.dto'
import { ExerciseResult } from './entity/exercise-result.entity'

@Controller('exercises')
export class ExercisesController {
    constructor(private readonly exercisesService: ExercisesService) {}

    @Post()
    async create(@Body() createExerciseDto: CreateExerciseDto): Promise<Exercise> {
        return this.exercisesService.createExercise(createExerciseDto);
    }
    
    @Post('exercise-result')
    async createExerciseResult(@Body() createExerciseResultDto: CreateExerciseResultDto): Promise<ExerciseResult> {
        return this.exercisesService.createExerciseResult(createExerciseResultDto);
    }
}
