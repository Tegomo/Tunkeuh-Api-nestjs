import { Prop } from "@nestjs/mongoose";
import { IsString } from "class-validator";

export class CreateServiceDto {
    @IsString()
    name: string;

    @Prop({ required: true, default: true })
    published!: boolean;
  
    @Prop({ default: Date.now })
    createdAt!: Date;
  
    @Prop({ default: Date.now })
    updatedAt!: Date;
}
