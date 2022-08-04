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
          street: "déido",
          zipCode: "75000",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [9.716409, 4.063963]
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
          coordinates: [9.740815, 4.063541,]
        },  

        { 
          _id: "62ca9ec9738ee38481256ddc",
          name: "Maison",
          street: "Logpom",
          zipCode: "75000",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [9.769924, 4.077007]
        }, 
        { 
          _id: "62ca9ec9738ee38481256ddd",
          name: "Bonamoussadi",
          street: "Makepe",
          zipCode: "7700",
          city: "Douala",
          country: "Cameroun",
          state: "Douala",
          coordinates: [9.739441, 4.094447]
        }, 
    ];

    // Insert into the database.
    return this.adress.insertMany(adress);
  }

  async drop(): Promise<any> {
    return this.adress.deleteMany({});
  }
}