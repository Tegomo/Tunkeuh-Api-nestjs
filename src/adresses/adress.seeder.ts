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
          street: "déido",
          zipCode: "75000",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [4.063963, 9.716409]
        }, 
        { 
          _id: "62ca9ec9738ee38481256ddb",
          name: "Travail",
          street: "Makepe",
          zipCode: "7700",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [4.063541, 9.740815]
        },  

        { 
          _id: "62ca9ec9738ee38481256ddc",
          name: "Maison",
          street: "Logpom",
          zipCode: "75000",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [4.077007, 9.769924]
        }, 
        { 
          _id: "62ca9ec9738ee38481256ddd",
          name: "Bonamoussadi",
          street: "Makepe",
          zipCode: "7700",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [4.094447, 9.739441]
        }, 
    ];

    // Insert into the database.
    return this.adress.insertMany(adress);
  }

  async drop(): Promise<any> {
    return this.adress.deleteMany({});
  }
}