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
          user: "62ca9ec9738ee38481256ddd",
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
          user: "62ca9ec9738ee38481256ddd",
          name: "Travail",
          street: "Makepe",
          zipCode: "7700",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [9.741590944335599, 4.064707330135306]
        },  

        { 
          _id: "62ca9ec9738ee38481256ddc",
          user: "62ca9ec9738ee38481256ddf",
          name: "Maison",
          street: "cité SIC",
          zipCode: "75000",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [4.052361, 9.729022]
        }, 
        { 
          _id: "62ca9ec9738ee38481256ddd",
          user: "62ca9ec9738ee38481256ddf",
          name: "Travail",
          street: "Deido",
          zipCode: "7700",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [4.063284, 9.715395]
        },

    ];

    // Insert into the database.
    return this.adress.insertMany(adress);
  }

  async drop(): Promise<any> {
    return this.adress.deleteMany({});
  }
}