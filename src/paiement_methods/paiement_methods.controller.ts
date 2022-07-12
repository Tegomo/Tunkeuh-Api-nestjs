import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaiementMethodsService } from './paiement_methods.service';
import { CreatePaiementMethodDto } from './dto/create-paiement_method.dto';
import { UpdatePaiementMethodDto } from './dto/update-paiement_method.dto';

@Controller('paiement-methods')
export class PaiementMethodsController {
  constructor(private readonly paiementMethodsService: PaiementMethodsService) {}

  @Post()
  create(@Body() createPaiementMethodDto: CreatePaiementMethodDto) {
    return this.paiementMethodsService.create(createPaiementMethodDto);
  }

  @Get()
  findAll() {
    return this.paiementMethodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paiementMethodsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaiementMethodDto: UpdatePaiementMethodDto) {
    return this.paiementMethodsService.update(+id, updatePaiementMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paiementMethodsService.remove(+id);
  }
}
