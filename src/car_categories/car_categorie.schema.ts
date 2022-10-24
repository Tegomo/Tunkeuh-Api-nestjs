import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Factory } from "nestjs-seeder";

export type CarCategorieDocument = CarCategorie & Document;

@Schema()
export class CarCategorie {
  
  @Prop({ required: true })
  name: string;

  @Factory(faker => faker.image.cats())
  @Prop()
  image: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, parentcategory: CarCategorie.name, required: false, default: null })
  @Type(() => CarCategorie)
  parentcategory: CarCategorie;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, carsubcategories: CarCategorie.name, required: false, default: null }])
  @Type(() => CarCategorie)
  carsubcategories: CarCategorie;

  @Prop({ required: true, default: false })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const  CarCategorieSchema = SchemaFactory.createForClass(CarCategorie);
