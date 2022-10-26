import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarGenresService } from './car_genres.service';
import { CreateCarGenreDto } from './dto/create-car_genre.dto';
import { UpdateCarGenreDto } from './dto/update-car_genre.dto';

@Controller('car-genres')
export class CarGenresController {
  constructor(private readonly carGenresService: CarGenresService) {}

  @Post()
  create(@Body() createCarGenreDto: CreateCarGenreDto) {
    return this.carGenresService.create(createCarGenreDto);
  }

  @Get()
  findAll() {
    return this.carGenresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carGenresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarGenreDto: UpdateCarGenreDto) {
    return this.carGenresService.update(+id, updateCarGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carGenresService.remove(+id);
  }
}
