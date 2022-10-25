import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DataFactory, Seeder } from "nestjs-seeder";
import { CarType } from "./car_type.schema";

@Injectable()
export class CarTypesSeeder implements Seeder {
  constructor(@InjectModel(CarType.name) private readonly carType: Model<CarType>) {}

  async seed(): Promise<any> {
    // Generate carTypes.
    //const carTypes = DataFactory.createForClass(CarType).generate(10);
    const carTypes = [
        { 
          _id: "62ca9ec9738ee38481256dda",
          name: "Coupe" 
        },
        {  
          _id: "62ca9ec9738ee38481256ddb",
          name: "Compact Car"
         },
        {
          _id: "62ca9ec9738ee38481256ddc",
           name: "Van/MiniVan" 
        },
        { 
          _id: "62ca9ec9738ee38481256ddd",
          name: "SUV"
         },
        { 
          _id: "22ca9ec9738ee38481256dda",
          name: "Hatchback" 
        },
        { 
          _id: "22ca9ec9738ee38481256ddb",
          name: "Wagon" 
        },
        { 
          _id: "22ca9ec9738ee38481256ddc",
          name: "Convertible" 
        },
    ];

    // Insert into the database.
    return this.carType.insertMany(carTypes);
  }

  async drop(): Promise<any> {
    return this.carType.deleteMany({});
  }
}