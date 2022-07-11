import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from "nestjs-seeder";

export type ServiceDocument = Service & Document;

@Schema()
export class Service {
  
  @Factory(faker => faker.random.arrayElement(["Ride", "Food", "package"]))
  @Prop()
  name: string;

  @Factory(faker => faker.image.cats())
  @Prop()
  image: string;

  @Prop({ required: true, default: true })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const ServiceSchema = SchemaFactory.createForClass(Service);
