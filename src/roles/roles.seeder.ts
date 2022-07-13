import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DataFactory, Seeder } from "nestjs-seeder";
import { Role } from "./role.schema";

@Injectable()
export class RolesSeeder implements Seeder {
  constructor(@InjectModel(Role.name) private readonly role: Model<Role>) {}

  async seed(): Promise<any> {
    // Generate roles.
    //const roles = DataFactory.createForClass(Role).generate(10);
    const roles = [
        { 
          _id: "62ca9ec9738ee38481256dda",
          name: "Admin" 
        },
        { 
          _id: "62ca9ec9738ee38481256ddb",
          name: "chauffeur"
         },
        {
          _id: "62ca9ec9738ee38481256ddc",
           name: "Client" 
        },
        { 
          _id: "62ca9ec9738ee38481256ddd",
          name: "Entreprise"
         },
        { 
          _id: "62ca9ec9738ee38481256dde",
          name: "Gestionnaire" 
        },
    ];

    // Insert into the database.
    return this.role.insertMany(roles);
  }

  async drop(): Promise<any> {
    return this.role.deleteMany({});
  }
}