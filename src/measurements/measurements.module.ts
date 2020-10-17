import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Measurement } from './entity/measurement.entity';
import { MeasurementsController } from './measurements.controller';
import { MeasurementsService } from './measurements.service';
import { User } from '../users/entity/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Measurement, User])],
    providers: [MeasurementsService],
    controllers: [MeasurementsController],
})
export class MeasurementsModule {}
