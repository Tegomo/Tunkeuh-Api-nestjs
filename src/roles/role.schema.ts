import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from "nestjs-seeder";

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  
  @Factory(faker => faker.random.arrayElement(["Admin", "Driver", "Client", "Owner", "Manager"]))
  @Prop()
  name: string;

}

export const RoleSchema = SchemaFactory.createForClass(Role);
