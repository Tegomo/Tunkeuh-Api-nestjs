import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Factory } from "nestjs-seeder";

export type ServiceDocument = Service & Document;

@Schema()
export class Service {
  
  @Factory(faker => faker.random.arrayElement(["Ride", "Food", "package"]))
  @Prop()
  name: string;

  @Factory(faker => faker.image.cats())
  @Prop({ required: false, default: null })
  image: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, parentService: Service.name, required: false, default: null })
  @Type(() => Service)
  parentService: Service;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, carsubcategories: Service.name, required: false, default: null }])
  @Type(() => Service)
  subServices: Service;

  @Prop({ required: true, default: true })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const ServiceSchema = SchemaFactory.createForClass(Service);
