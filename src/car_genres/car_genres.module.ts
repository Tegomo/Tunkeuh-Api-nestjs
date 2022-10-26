import { Module } from '@nestjs/common';
import { CarGenresService } from './car_genres.service';
import { CarGenresController } from './car_genres.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarGenre, CarGenreSchema } from './car_genre.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CarGenre.name,
        schema: CarGenreSchema,
      },
    ]),
  ],
  controllers: [CarGenresController],
  providers: [CarGenresService]
})
export class CarGenresModule {}
