import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { Role } from 'src/roles/role.schema';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phone: string;

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

  @Prop({ required: true, default: true })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);
