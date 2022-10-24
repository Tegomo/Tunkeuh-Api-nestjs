import { Module } from '@nestjs/common';
import { CarCategoriesService } from './car_categories.service';
import { CarCategoriesController } from './car_categories.controller';

@Module({
  controllers: [CarCategoriesController],
  providers: [CarCategoriesService]
})
export class CarCategoriesModule {}
