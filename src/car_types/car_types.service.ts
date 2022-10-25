import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CarType, CarTypeDocument } from './car_type.schema';
import { CreateCarTypeDto } from './dto/create-car_type.dto';
import { UpdateCarTypeDto } from './dto/update-car_type.dto';
import { Model } from 'mongoose';

@Injectable()
export class CarTypesService {

  constructor(
    @InjectModel(CarType.name) private carTypeModel: Model<CarTypeDocument>,
  ) {}


  create(createCarTypeDto: CreateCarTypeDto) {
    return 'This action adds a new carType';
  }

  async findAll() {
    const carTypes  = await this.carTypeModel.find();
    return carTypes ;
  }

  findOne(id: number) {
    return `This action returns a #${id} carType`;
  }

  update(id: number, updateCarTypeDto: UpdateCarTypeDto) {
    return `This action updates a #${id} carType`;
  }

  remove(id: number) {
    return `This action removes a #${id} carType`;
  }
}
