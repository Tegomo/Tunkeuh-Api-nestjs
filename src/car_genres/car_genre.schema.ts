import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from "nestjs-seeder";
import { User } from 'src/users/user.schema';

export type CarGenreDocument = CarGenre & Document;

@Schema()
export class CarGenre {
  
  @Factory(faker => faker.random.arrayElement(["Moto", "Voiture", "Camion", "Tricycle", "Fougonette", "Dyna" ]))
  @Prop()
  name: string;

  @Prop({ required: true, default: true })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const CarGenreSchema = SchemaFactory.createForClass(CarGenre);
