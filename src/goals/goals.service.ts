import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Goal } from './entity/goal.entity';
import { CreateGoalDto } from './dto/create-goal.dto';
import { User } from '../users/entity/user.entity';

@Injectable()
export class GoalsService {
    constructor (
        @InjectRepository(Goal)
        private readonly goalsRepository: Repository<Goal>,

        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async createGoal(createGoalDto: CreateGoalDto): Promise<Goal> {
        const newGoal = new Goal();
        
        newGoal.kcal = createGoalDto.kcal;
        newGoal.dateStart = createGoalDto.dateStart ? createGoalDto.dateStart : new Date();
        newGoal.dateEnd = createGoalDto.dateEnd ? createGoalDto.dateEnd : null;
        newGoal.user = await this.usersRepository.findOne(createGoalDto.userId)

        return this.goalsRepository.save(newGoal);
    }
}
