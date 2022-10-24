import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarCategorie, CarCategorieDocument } from './car_categorie.schema';
import { CreateCarCategoryDto } from './dto/create-car_category.dto';
import { UpdateCarCategoryDto } from './dto/update-car_category.dto';

@Injectable()
export class CarCategoriesService {

  constructor(
    @InjectModel(CarCategorie.name) private carCategorie: Model<CarCategorieDocument>
  ) {}


  async create(createCarCategoryDto: CreateCarCategoryDto) {
    const carCategories = await this.carCategorie
    .find({ role: '62ca9ec9738ee38481256ddd' })
    .populate('carsubcategories'  , null, CarCategorie.name)
    .populate('parentcategory'  , null, CarCategorie.name)
    .where('published').equals(true);

    return carCategories;
  }

  findAll() {
    return `This action returns all carCategories`;
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
