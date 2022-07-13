import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DataFactory, Seeder } from "nestjs-seeder";
import { Adress } from "./adress.schema";

@Injectable()
export class AdressesSeeder implements Seeder {
  constructor(@InjectModel(Adress.name) private readonly adress: Model<Adress>) {}

  async seed(): Promise<any> {
    // Generate adresses.
    const adress = [
        { 
          _id: "62ca9ec9738ee38481256dda",
          name: "Maison",
          street: "Bépanda",
          zipCode: "75000",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [9.722446952142093, 4.057694946125622]
        }, 
        { 
          _id: "62ca9ec9738ee38481256ddb",
          name: "Travail",
          street: "Makepe",
          zipCode: "7700",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [9.741590944335599, 4.064707330135306]
        },  
    ];

    // Insert into the database.
    return this.adress.insertMany(adress);
  }

  async drop(): Promise<any> {
    return this.adress.deleteMany({});
  }
}