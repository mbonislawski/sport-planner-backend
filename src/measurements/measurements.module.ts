import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Measurement } from '../entities/measurement.entity';
import { MeasurementsController } from './measurements.controller';
import { MeasurementsService } from './measurements.service';
import { User } from '../entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Measurement, User])],
    providers: [MeasurementsService],
    controllers: [MeasurementsController],
})
export class MeasurementsModule {}
