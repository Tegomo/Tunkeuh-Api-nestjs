import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CarGenreDocument } from './car_genre.schema';
import { CreateCarGenreDto } from './dto/create-car_genre.dto';
import { UpdateCarGenreDto } from './dto/update-car_genre.dto';
import { CarGenre } from './entities/car_genre.entity';
import { Model } from 'mongoose';

@Injectable()
export class CarGenresService {

  constructor(
    @InjectModel(CarGenre.name) private carGenreModel: Model<CarGenreDocument>,
  ) {}

  create(createCarGenreDto: CreateCarGenreDto) {
    return 'This action adds a new carGenre';
  }

  async findAll() {
    const carTypes  = await this.carGenreModel.find();
    return carTypes ;
  }

  findOne(id: number) {
    return `This action returns a #${id} carGenre`;
  }

  update(id: number, updateCarGenreDto: UpdateCarGenreDto) {
    return `This action updates a #${id} carGenre`;
  }

  remove(id: number) {
    return `This action removes a #${id} carGenre`;
  }
}
