import { PartialType } from '@nestjs/mapped-types';
import { CreateVehiclesCategoryDto } from './create-vehicles_category.dto';

export class UpdateVehiclesCategoryDto extends PartialType(CreateVehiclesCategoryDto) {}
