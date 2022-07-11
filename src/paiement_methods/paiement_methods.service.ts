import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePaiementMethodDto } from './dto/create-paiement_method.dto';
import { UpdatePaiementMethodDto } from './dto/update-paiement_method.dto';
import { PaiementMethod, PaiementMethodDocument } from './paiement_method.schema';

@Injectable()
export class PaiementMethodsService {

  constructor(
    @InjectModel(PaiementMethod.name) private PaiementMethod: Model<PaiementMethodDocument>,
  ) {}

  create(createPaiementMethodDto: CreatePaiementMethodDto) {
    return 'This action adds a new paiementMethod';
  }

  async findAll() {
    const paiementMethods  = await this.PaiementMethod.find();
    return { paiementMethods };
  }

  findOne(id: number) {
    return `This action returns a #${id} paiementMethod`;
  }

  update(id: number, updatePaiementMethodDto: UpdatePaiementMethodDto) {
    return `This action updates a #${id} paiementMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} paiementMethod`;
  }
}
