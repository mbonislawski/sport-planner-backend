import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Measurement } from './entity/measurement.entity';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { User } from '../users/entity/user.entity';

@Injectable()
export class MeasurementsService {
    constructor (
        @InjectRepository(Measurement)
        private readonly measurementsRepository: Repository<Measurement>,

        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async createMeasurement(createMeasurementDto: CreateMeasurementDto): Promise<Measurement> {
        const measurement = new Measurement();

        measurement.date = new Date();
        measurement.weight = createMeasurementDto.weight;
        measurement.user = await this.usersRepository.findOne(createMeasurementDto.userId);

        return this.measurementsRepository.save(measurement);
    }
}
