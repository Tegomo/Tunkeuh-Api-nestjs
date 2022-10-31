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
          _id: "62ca9ec9738ee38481256dda",
          name: "Location",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          subServices: [ "62ca9ec9738ee38481256ddd","22ca9ec9738ee38481256dda","22ca9ec9738ee38481256ddb","22ca9ec9738ee38481256ddc","22ca9ec9738ee38481256ddd"]
        }, 
        { 
          _id: "62ca9ec9738ee38481256ddb",
          name: "Vente", 
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
        }, 
        { 
          
          _id: "62ca9ec9738ee38481256ddc",
          name: "Service courrier",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
        }, 
        { 
          
          _id: "62ca9ec9738ee38481256ddd",
          name: "Location taxi",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
          parentService: "62ca9ec9738ee38481256dda"
        },
        { 
          _id: "22ca9ec9738ee38481256dda",
          name: "Location vehicule",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
          parentService: "62ca9ec9738ee38481256dda"
        },
        { 
          _id: "22ca9ec9738ee38481256ddb",
          name: "Location moto taxi",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
          parentService: "62ca9ec9738ee38481256dda"
        },
        { 
          _id: "22ca9ec9738ee38481256ddc",
          name: "Location fourgonette",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
          parentService: "62ca9ec9738ee38481256dda"
        },
        { 
          _id: "22ca9ec9738ee38481256ddd",
          name: "Location tricycle",
          image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
          parentService: "62ca9ec9738ee38481256dda"
        },
        
    ];

    // Insert into the database.
    return this.service.insertMany(services);
  }

  async drop(): Promise<any> {
    return this.service.deleteMany({});
  }
}