import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MeasurementsModule } from './measurements/measurements.module';
import { GoalsModule } from './goals/goals.module';
import { PlansModule } from './plans/plans.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 12345,
      username: 'root',
      password: 'root',
      database: 'sport-planner',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    MeasurementsModule,
    GoalsModule,
    PlansModule,
    ExercisesModule
  ],
})
export class AppModule {}
