import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service, ServiceDocument } from './service.schema';

@Injectable()
export class ServicesService {

  constructor(
    @InjectModel(Service.name) private ServiceModel: Model<ServiceDocument>,
  ) {}


  create(createServiceDto: CreateServiceDto) {
    return 'This action adds a new service';
  }

  async findAll() {
    const Services  = await this.ServiceModel.find();
    return { Services };
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
