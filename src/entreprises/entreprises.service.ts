import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Adress } from 'src/adresses/adress.schema';
import { Role } from 'src/roles/role.schema';
import { User, UserDocument } from 'src/users/user.schema';
import { CreateEntrepriseDto } from './dto/create-entreprise.dto';
import { UpdateEntrepriseDto } from './dto/update-entreprise.dto';

@Injectable()
export class EntreprisesService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  create(createEntrepriseDto: CreateEntrepriseDto) {
    return 'This action adds a new entreprise';
  }

  async findAll() {
    const entreprises = await this.userModel
    .find({ role: '62ca9ec9738ee38481256ddd' })
    .populate('role'  , null, Role.name)
    .populate('adresses'  , null, Adress.name)
    .populate('staff'  , null, User.name)
    .where('isActive').equals(true);

    return entreprises;
  }

  findOne(id: number) {
    return `This action returns a #${id} entreprise`;
  }

  update(id: number, updateEntrepriseDto: UpdateEntrepriseDto) {
    return `This action updates a #${id} entreprise`;
  }

  remove(id: number) {
    return `This action removes a #${id} entreprise`;
  }
}
