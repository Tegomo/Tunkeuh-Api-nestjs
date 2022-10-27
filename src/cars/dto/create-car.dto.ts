import { Prop } from "@nestjs/mongoose";
import { IsString } from "class-validator";
import { Factory } from "nestjs-seeder";

export class CreateCarDto {

    @IsString()
    matricule: string;

    @IsString()
    marque: string;
    
    @IsString()
    name: string;
    
    @IsString()
    model: string;
    
    @IsString()
    couleur: string;
    
    @IsString()
    puissance: string;
    
    @IsString()
    genre: string;
    
    @IsString()
    energie: string;

    @IsString()
    vitesse: string;
    
    @IsString()
    kilometrage: string;
    
    @IsString()
    structure: string;
    
    @IsString()
    driver: string;

    @IsString()
    nbrPlaces: string;
    
    @IsString()
    nbrPortes: string;
    
    @Factory(faker => faker.images.cats())
    @IsString()
    images: string ;
    
    @Prop({ required: true, default: true })
    published!: boolean;
  
    @Prop({ default: Date.now })
    createdAt!: Date;
  
    @Prop({ default: Date.now })
    updatedAt!: Date;
}
