import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DataFactory, Seeder } from "nestjs-seeder";
import { VehicleCategory } from "./vehicles_category.schema";

@Injectable()
export class VehicleCategoriesSeeder implements Seeder {
  constructor(@InjectModel(VehicleCategory.name) private readonly vehicleCategory: Model<VehicleCategory>) {}

  async seed(): Promise<any> {
    // Generate VehicleCategories.
    const vehicleCategories = [
        { 
          _id: "62ca9ec9738ee38481256dda",
          name: "transport public",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          subcategories: ["12ca9ec9738ee38481256dda", "22ca9ec9738ee38481256dda"],
        },  
        { 
          _id: "62ca9ec9738ee38481256ddb",
          name: "Transports de marchandises",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          subcategories: ["12ca9ec9738ee38481256ddb", "22ca9ec9738ee38481256ddb", "32ca9ec9738ee38481256ddb", "42ca9ec9738ee38481256ddb", "52ca9ec9738ee38481256ddb"],
        },
        { 
          _id: "12ca9ec9738ee38481256dda",
          name: "Moto",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          category: "62ca9ec9738ee38481256dda" 
        },
        { 
          _id: "22ca9ec9738ee38481256dda",
          name: "Voiture",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          category: "62ca9ec9738ee38481256dda" 
        },

        { 
          _id: "12ca9ec9738ee38481256ddb",
          name: "Moto",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          category: "62ca9ec9738ee38481256ddb" 
        },
        { 
          _id: "22ca9ec9738ee38481256ddb",
          name: "Voiture",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          category: "62ca9ec9738ee38481256ddb" 
        },
        { 
          _id: "32ca9ec9738ee38481256ddb",
          name: "Tricycle",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          category: "62ca9ec9738ee38481256ddb" 
        },
        { 
          _id: "42ca9ec9738ee38481256ddb",
          name: "Camion",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          category: "62ca9ec9738ee38481256ddb" 
        },
        { 
          _id: "52ca9ec9738ee38481256ddb",
          name: "Vélo",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          category: "62ca9ec9738ee38481256ddb" 
        },
    ];

    // Insert into the database.
    return this.vehicleCategory.insertMany(vehicleCategories);
  }

  async drop(): Promise<any> {
    return this.vehicleCategory.deleteMany({});
  }
}