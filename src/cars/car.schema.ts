import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Factory } from "nestjs-seeder";
import { CarCategorie } from 'src/car_categories/car_categorie.schema';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  
  @Prop({ required: true })
  matricule: string;

  @Prop({ required: false, default:null })
  type: string;

  @Prop({ required: false, default:null })
  marque: string;

  @Prop({ required: false, default:null })
  model: string;

  @Prop({ required: false, default:null })
  couleur: string;

  @Prop({ required: false, default:null })
  genre: string;

  @Prop({ required: false, default:null })
  puissance: string;

  @Prop({ required: false, default:null })
  energie: string;

  @Prop({ required: false, default:null })
  kilometrage: string;

  @Prop({ required: false, default:null })
  vitesse: string;

  @Prop({ required: false, default:null })
  nbrPlaces: string;

  @Prop({ required: false, default:null })
  nbrPortes: string;

  @Prop({ required: false, default: false })
  image: any;

  @Prop({ type: mongoose.Schema.Types.ObjectId, carCategorie: CarCategorie.name, required: false, default: null })
  @Type(() => CarCategorie)
  carCategorie: CarCategorie;

  @Prop({ type: mongoose.Schema.Types.ObjectId, carCategorie: CarCategorie.name, required: false, default: null })
  @Type(() => CarCategorie)
  Type: CarCategorie;

  @Prop({ required: true, default: false })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const  CarCategorieSchema = SchemaFactory.createForClass(Car);
