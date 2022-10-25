import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarTypesService } from './car_types.service';
import { CreateCarTypeDto } from './dto/create-car_type.dto';
import { UpdateCarTypeDto } from './dto/update-car_type.dto';

@Controller('car-types')
export class CarTypesController {
  constructor(private readonly carTypesService: CarTypesService) {}

  @Post()
  create(@Body() createCarTypeDto: CreateCarTypeDto) {
    return this.carTypesService.create(createCarTypeDto);
  }

  @Get()
  findAll() {
    return this.carTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarTypeDto: UpdateCarTypeDto) {
    return this.carTypesService.update(+id, updateCarTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carTypesService.remove(+id);
  }
}
