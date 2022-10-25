import { Module } from '@nestjs/common';
import { CarTypesService } from './car_types.service';
import { CarTypesController } from './car_types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarType, CarTypeSchema } from './car_type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CarType.name,
        schema: CarTypeSchema,
      },
    ]),
  ],
  controllers: [CarTypesController],
  providers: [CarTypesService]
})
export class CarTypesModule {}
