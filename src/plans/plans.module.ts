import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from '../entities/plan.entity'
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';
import { User } from '../entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Plan, User])],
    providers: [PlansService],
    controllers: [PlansController],
})
export class PlansModule {}
