import { PartialType } from '@nestjs/mapped-types';
import { CreatePaiementMethodDto } from './create-paiement_method.dto';

export class UpdatePaiementMethodDto extends PartialType(CreatePaiementMethodDto) {}
