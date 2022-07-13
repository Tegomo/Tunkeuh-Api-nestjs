import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DataFactory, Seeder } from "nestjs-seeder";
import { User } from "./user.schema";

@Injectable()
export class UsersSeeder implements Seeder {
  constructor(@InjectModel(User.name) private readonly user: Model<User>) {}

  async seed(): Promise<any> {
    // Generate users.
    const users = [
        { 
          _id: "62ca9ec9738ee38481256dda",
          name: "Admin",
          email: "tegomovarmand@gmail.com",
          password: "123456",
          phone: "6868686868",
          isActive: true,
          isSuperAdmin: true,
          role: "62ca9ec9738ee38481256dda",
          staff: null
        },  
        { 
          _id: "62ca9ec9738ee38481256ddc",
          name: "Client",
          email: "client@gmail.com",
          password: "123456",
          phone: "6868686868",
          isActive: true,
          isSuperAdmin: false,
          role: "62ca9ec9738ee38481256ddc",
          staff: null
        }, 
        { 
          _id: "62ca9ec9738ee38481256ddd",
          name: "Entreprise 1",
          email: "entreprise@gmail.com",
          password: "123456",
          phone: "6868686868",
          isActive: true,
          isSuperAdmin: false,
          role: "62ca9ec9738ee38481256ddd",
          staff: ["62ca9ec9738ee38481256ddb", "62ca9ec9738ee38481256dde"]
        },
        { 
          _id: "62ca9ec9738ee38481256ddb",
          name: "Chauffeur",
          email: "chauffeur@gmail.com",
          password: "123456",
          phone: "6868686868",
          isActive: true,
          isSuperAdmin: false,
          role: "62ca9ec9738ee38481256ddb",
          staff: null,
          entreprise: "62ca9ec9738ee38481256ddd"
        },
        { 
          _id: "62ca9ec9738ee38481256dde",
          name: "Gestionnaire",
          email: "gestionnaire@gmail.com",
          password: "123456",
          phone: "6868686868",
          isActive: true,
          isSuperAdmin: false,
          role: "62ca9ec9738ee38481256dde",
          staff: null,
          entreprise: "62ca9ec9738ee38481256ddd"
        },
    ];

    // Insert into the database.
    return this.user.insertMany(users);
  }

  async drop(): Promise<any> {
    return this.user.deleteMany({});
  }
}