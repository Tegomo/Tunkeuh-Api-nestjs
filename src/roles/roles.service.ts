import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role, RoleDocument } from './role.schema';

@Injectable()
export class RolesService {

  constructor(
    @InjectModel(Role.name) private RoleModel: Model<RoleDocument>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = new this.RoleModel(createRoleDto);
    await role.save();
    return { role };
  }

  async findAll() {
    const roles  = await this.RoleModel.find();
    return roles ;
  }

  async findOne(id: string) {
    const role = await this.RoleModel.findById(id);
    if (!role) {
      throw new NotFoundException(`role with id ${id} not found`);
    }
    return  role ;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const  role  = await this.findOne(id);
    if (updateRoleDto.name) {
      role.name = updateRoleDto.name;
    }
    await role.save();
    return  role ;
  }

  async remove(id: string) {
    const  role  = await this.findOne(id);
    await role.remove();
  }
  
}
