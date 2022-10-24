import { PartialType } from '@nestjs/mapped-types';
import { CreateCarCategoryDto } from './create-car_category.dto';

export class UpdateCarCategoryDto extends PartialType(CreateCarCategoryDto) {}
