import { Injectable } from '@nestjs/common';
import { Plan } from '../entities/plan.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanDto } from './dto/create-plan.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class PlansService {
    constructor (
        @InjectRepository(Plan)
        private readonly plansRepository: Repository<Plan>,

        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async createPlan(createPlanDto: CreatePlanDto): Promise<Plan> {
        const newPlan = new Plan();
        
        newPlan.dateStart = createPlanDto.dateStart ? createPlanDto.dateStart : new Date();
        newPlan.dateEnd = createPlanDto.dateEnd ? createPlanDto.dateEnd : null;
        newPlan.user = await this.usersRepository.findOne(createPlanDto.userId)

        return this.plansRepository.save(newPlan);
    }
}
