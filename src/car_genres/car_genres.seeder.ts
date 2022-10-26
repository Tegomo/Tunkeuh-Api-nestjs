import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DataFactory, Seeder } from "nestjs-seeder";
import { CarGenre } from "./car_genre.schema";

@Injectable()
export class CarGenresSeeder implements Seeder {
  constructor(@InjectModel(CarGenre.name) private readonly carGenre: Model<CarGenre>) {}

  async seed(): Promise<any> {
    // Generate carGenres.
    //const carGenres = DataFactory.createForClass(CarGenre).generate(10);
    const carGenres = [
        { 
          _id: "62ca9ec9738ee38481256dda",
          name: "Moto" 
        },
        {  
          _id: "62ca9ec9738ee38481256ddb",
          name: "Voiture"
         },
        {
          _id: "62ca9ec9738ee38481256ddc",
           name: "Camion" 
        },
        { 
          _id: "62ca9ec9738ee38481256ddd",
          name: "Tricycle"
         },
        { 
          _id: "22ca9ec9738ee38481256dda",
          name: "Fougonette" 
        },
        { 
          _id: "22ca9ec9738ee38481256ddb",
          name: "Dyna" 
        },
    ];

    // Insert into the database.
    return this.carGenre.insertMany(carGenres);
  }

  async drop(): Promise<any> {
    return this.carGenre.deleteMany({});
  }
}