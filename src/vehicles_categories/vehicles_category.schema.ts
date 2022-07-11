import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Factory } from "nestjs-seeder";

export type VehicleCategoryDocument = VehicleCategory & Document;

@Schema()
export class VehicleCategory {
  
  @Factory(faker => faker.random.arrayElement(["transport public", "Transports de marchandises"]))
  @Prop()
  name: string;

  @Factory(faker => faker.image.cats())
  @Prop({ required: false, default: null })
  image: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, category: VehicleCategory.name, required: false, default: null })
  @Type(() => VehicleCategory)
  category: VehicleCategory;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, subcategories: VehicleCategory.name, required: false, default: null }])
  @Type(() => VehicleCategory)
  subcategories: VehicleCategory;

  @Prop({ required: true, default: true })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const VehicleCategorySchema = SchemaFactory.createForClass(VehicleCategory);
