import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { Role } from 'src/roles/role.schema';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop()
  email: string;

  @Prop()
  password: string;

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
