import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVehiclesCategoryDto } from './dto/create-vehicles_category.dto';
import { UpdateVehiclesCategoryDto } from './dto/update-vehicles_category.dto';
import { VehicleCategory, VehicleCategoryDocument } from './vehicles_category.schema';

@Injectable()
export class VehiclesCategoriesService {

  constructor(
    @InjectModel(VehicleCategory.name) private VehicleCategoryModel: Model<VehicleCategoryDocument>,
  ) {}

  create(createVehiclesCategoryDto: CreateVehiclesCategoryDto) {
    return 'This action adds a new vehiclesCategory';
  }

  async findAll() {
    const VehicleCategories  = await this.VehicleCategoryModel.find()
    .populate('subcategories', null, VehicleCategory.name)
    .populate('category', null, VehicleCategory.name)
    .sort({createdAt: 'desc'})
    .exec();
    return  VehicleCategories ;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiclesCategory`;
  }

  update(id: number, updateVehiclesCategoryDto: UpdateVehiclesCategoryDto) {
    return `This action updates a #${id} vehiclesCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiclesCategory`;
  }
}
