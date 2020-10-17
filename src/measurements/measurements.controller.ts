import { Body, Controller, Post } from '@nestjs/common';
import { MeasurementsService } from './measurements.service';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { Measurement } from './entity/measurement.entity';

@Controller('measurements')
export class MeasurementsController {
    constructor(private readonly measurementsService: MeasurementsService) {}

    @Post()
    create(@Body() ceateMeasurementDto: CreateMeasurementDto): Promise<Measurement> {
      return this.measurementsService.createMeasurement(ceateMeasurementDto);
    }
}
