import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';
import { CarCategorie } from 'src/car_categories/car_categorie.schema';
import { CarGenre } from 'src/car_genres/car_genre.schema';
import { CarType } from 'src/car_types/car_type.schema';
import { User } from 'src/users/user.schema';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  
  @Prop({ required: true })
  matricule: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, carType: CarType.name, required: false })
  @Type(() => CarType)
  carType: CarType;

  @Prop({ required: false, default:null })
  marque: string;

  @Prop({ required: false, default:null })
  model: string;

  @Prop({ required: false, default:null })
  couleur: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, carGenre: CarGenre.name, required: false })
  @Type(() => CarGenre)
  carGenre: CarGenre;

  @Prop({ type: mongoose.Schema.Types.ObjectId, user: User.name, required: true })
  @Type(() => User)
  structure: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, driver: User.name, required: false })
  @Type(() => User)
  driver: User;

  @Prop({ required: false, default:null })
  puissance: string;

  @Factory(faker => faker.random.arrayElement(["Essence", "Gazoil", "Client", "Electrique"]))
  @Prop()
  energie: string;


  @Prop({ required: false, default:null })
  kilometrage: string;

  @Prop({ required: false, default:null })
  vitesse: string;

  @Prop({ required: false, default:null })
  nbrPlaces: string;

  @Prop({ required: false, default:null })
  nbrPortes: string;

  @Prop({ required: false, default: [] })
  images: any;

  @Prop({ type: mongoose.Schema.Types.ObjectId, carCategorie: CarCategorie.name, required: false, default: null })
  @Type(() => CarCategorie)
  carCategorie: CarCategorie;

  @Prop({ required: true, default: false })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const  CarSchema = SchemaFactory.createForClass(Car);
