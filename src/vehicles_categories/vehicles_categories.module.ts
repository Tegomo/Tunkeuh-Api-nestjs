import { Module } from '@nestjs/common';
import { VehiclesCategoriesService } from './vehicles_categories.service';
import { VehiclesCategoriesController } from './vehicles_categories.controller';
import { VehicleCategory, VehicleCategorySchema } from './vehicles_category.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: VehicleCategory.name,
        schema: VehicleCategorySchema,
      },
    ]),
  ],
  controllers: [VehiclesCategoriesController],
  providers: [VehiclesCategoriesService]
})
export class VehiclesCategoriesModule {}
