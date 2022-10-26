import { PartialType } from '@nestjs/mapped-types';
import { CreateCarGenreDto } from './create-car_genre.dto';

export class UpdateCarGenreDto extends PartialType(CreateCarGenreDto) {}
