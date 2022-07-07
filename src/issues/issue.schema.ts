import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IssueDocument = Issue & Document;

@Schema()
export class Issue {
  
  @Prop()
  title: string;

  @Prop()
  body: string;
}

export const IssueSchema = SchemaFactory.createForClass(Issue);
