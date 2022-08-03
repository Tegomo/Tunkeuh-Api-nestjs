import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from "nestjs-seeder";
import { User } from 'src/users/user.schema';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  
  @Factory(faker => faker.random.arrayElement(["Admin", "chauffeur", "Client", "Entreprise", "Gestionnaire"]))
  @Prop()
  name: string;

  @Prop({ required: true, default: true })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const RoleSchema = SchemaFactory.createForClass(Role);
