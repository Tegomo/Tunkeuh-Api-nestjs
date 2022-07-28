import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DataFactory, Seeder } from "nestjs-seeder";
import { Service } from "./service.schema";

@Injectable()
export class ServicesSeeder implements Seeder {
  constructor(@InjectModel(Service.name) private readonly service: Model<Service>) {}

  async seed(): Promise<any> {
    // Generate services.
    const services = [
        { 
          name: "Drive",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
        }, 
        { 
          name: "Food", 
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
        }, 
        { 
          name: "Package",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
        }, 
        { 
          name: "Shop",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
        },
    ];

    // Insert into the database.
    return this.service.insertMany(services);
  }

  async drop(): Promise<any> {
    return this.service.deleteMany({});
  }
}