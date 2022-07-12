import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from "nestjs-seeder";

export type PaiementMethodDocument = PaiementMethod & Document;

@Schema()
export class PaiementMethod {
  
  @Factory(faker => faker.random.arrayElement(["Cash", "Cartes de crédit", "Paiements mobiles"]))
  @Prop()
  name: string;

  @Prop({ required: false, default: null })
  image: string;

  @Prop({ required: true, default: true })
  published!: boolean;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;

}

export const PaiementMethodSchema = SchemaFactory.createForClass(PaiementMethod);
