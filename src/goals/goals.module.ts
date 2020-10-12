import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goal } from '../entities/goal.entity'
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';
import { User } from '../entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Goal, User])],
    providers: [GoalsService],
    controllers: [GoalsController],
})
export class GoalsModule {}
