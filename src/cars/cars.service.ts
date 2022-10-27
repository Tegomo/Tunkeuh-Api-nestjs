import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from './car.schema';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Model } from 'mongoose';
import { CarType } from 'src/car_types/car_type.schema';
import { CarGenre } from 'src/car_genres/car_genre.schema';
import { User } from 'src/users/user.schema';

@Injectable()
export class CarsService {

  constructor(
    @InjectModel(Car.name) private carModel: Model<CarDocument>
  ) {}

  create(createCarDto: CreateCarDto) {
    return 'This action adds a new car';
  }

  async findAll() {
    const cars = await this.carModel
    .find();

    return cars;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
