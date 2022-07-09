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
        { name: "Admin" },
        { name: "Driver" },
        { name: "Client" },
        { name: "Owner" },
        { name: "Manager" },
    ];

    // Insert into the database.
    return this.role.insertMany(roles);
  }

  async drop(): Promise<any> {
    return this.role.deleteMany({});
  }
}