import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';
import { Adress } from 'src/adresses/adress.schema';
import { Role } from 'src/roles/role.schema';
import { ManyToOne } from 'typeorm';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Factory(faker => faker.name.firstName()) 
  @Prop({ required: true })
  name: string;

  @Factory(faker => faker.internet.email())
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Factory(faker => faker.name.phone())
  @Prop({ required: true })
  phone: string;

  @Factory(faker => faker.image.avatar())
  @Prop({ required: false, default: null })
  profile_url: string;

  @Prop({ required: false, default: null })
  driver_licence_number: string;

  @Prop({ required: false, default: null })
  driver_licence_front: string;

  @Prop({ required: false, default: null })
  driver_licence_back: string;

  @Prop({ required: false, default: null })
  card_id_number: string;

  @Prop({ required: false, default: null })
  card_id_front: string;

  @Prop({ required: false, default: null })
  card_id_back: string;

  @Prop({ required: true, default: false })
  isActive: boolean;

  @Prop({ required: true, default: false })
  isSuperAdmin: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, role: Role.name })
  @Type(() => Role)
  role: Role;

  @Prop({ type: mongoose.Schema.Types.ObjectId, entreprise: User.name, required: false, default: null })
  @Type(() => User)
  entreprise: User;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, staff: User.name, required: false, default: null }])
  @Type(() => User)
  staff: User;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, adress: Adress.name, required: false, default: null }])
  @Type(() => Adress)
  adresses: Adress;

  @Prop({ required: true, default: true })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);
