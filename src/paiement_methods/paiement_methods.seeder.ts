import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DataFactory, Seeder } from "nestjs-seeder";
import { PaiementMethod } from "./paiement_method.schema";

@Injectable()
export class PaiementMethodsSeeder implements Seeder {
  constructor(@InjectModel(PaiementMethod.name) private readonly PaiementMethod: Model<PaiementMethod>) {}

  async seed(): Promise<any> {
    // Generate VehicleCategories.
    const PaiementMethods = [
      { 
        name: "Cash",
      }, 
      { 
        name: "Cartes de crédit", 
      }, 
      { 
        name: "Package",
      }, 
    ];

    // Insert into the database.
    return this.PaiementMethod.insertMany(PaiementMethods);
  }

  async drop(): Promise<any> {
    return this.PaiementMethod.deleteMany({});
  }
}