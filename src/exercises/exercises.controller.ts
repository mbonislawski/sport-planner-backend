import { Body, Controller, Post } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto'
import { Exercise } from '../entities/exercise.entity'

@Controller('exercises')
export class ExercisesController {
    constructor(private readonly exercisesService: ExercisesService) {}

    @Post()
    async create(@Body() createExerciseDto: CreateExerciseDto): Promise<Exercise> {
        return this.exercisesService.createExercise(createExerciseDto);
    }
}
