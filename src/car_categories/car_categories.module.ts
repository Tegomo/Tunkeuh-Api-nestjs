import { Module } from '@nestjs/common';
import { CarCategoriesService } from './car_categories.service';
import { CarCategoriesController } from './car_categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarCategorie, CarCategorieSchema } from './car_categorie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CarCategorie.name,
        schema: CarCategorieSchema,
      },
    ]),
  ],
  controllers: [CarCategoriesController],
  providers: [CarCategoriesService]
})
export class CarCategoriesModule {}
