import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/user.schema';

export type AdressDocument = Adress & Document;

@Schema()
export class Adress {
  
  @Prop({ required: false, default: null })
  name: string;

  @Prop({ required: false, default: null })
  country: string;

  @Prop({ required: false, default: null })
  state: string;

  @Prop({ required: false, default: null })
  city: string;

  @Prop({ required: false, default: null })
  street: string;

  @Prop({ required: true, index: '2dsphere' })
  coordinates: number[];

  @Prop({ required: true, default: true })
  published!: boolean;


  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const AdressSchema = SchemaFactory.createForClass(Adress);
