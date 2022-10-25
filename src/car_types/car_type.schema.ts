import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from "nestjs-seeder";
import { User } from 'src/users/user.schema';

export type CarTypeDocument = CarType & Document;

@Schema()
export class CarType {
  
  @Factory(faker => faker.random.arrayElement(["Coupe", "Compact Car", "Van/MiniVan", "SUV", "Hatchback", "Wagon", "Convertible" ]))
  @Prop()
  name: string;

  @Prop({ required: true, default: true })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const CarTypeSchema = SchemaFactory.createForClass(CarType);
