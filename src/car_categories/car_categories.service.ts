import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarCategorie, CarCategorieDocument } from './car_categorie.schema';
import { CreateCarCategoryDto } from './dto/create-car_category.dto';
import { UpdateCarCategoryDto } from './dto/update-car_category.dto';

@Injectable()
export class CarCategoriesService {

  constructor(
    @InjectModel(CarCategorie.name) private carCategorieModel: Model<CarCategorieDocument>,
  ) {}


  create(createCarCategoryDto: CreateCarCategoryDto) {
    return 'This action adds a new carCategory';
  }

  async findAll() {
    const carCategories = await this.carCategorieModel
    .find()
    .populate('carsubcategories'  , null, CarCategorie.name)
    .populate('parentcategory'  , null, CarCategorie.name)
    .where('published').equals(true);

    return carCategories;
  }

  findOne(id: number) {
    return `This action returns a #${id} carCategory`;
  }

  update(id: number, updateCarCategoryDto: UpdateCarCategoryDto) {
    return `This action updates a #${id} carCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} carCategory`;
  }
}
