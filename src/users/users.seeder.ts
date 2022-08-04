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
          profile_url: "https://i.pravatar.cc/300",
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
          profile_url: "https://i.pravatar.cc/300",
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
          profile_url: "https://i.pravatar.cc/300",
          name: "Entreprise 1",
          email: "entreprise@gmail.com",
          password: "123456",
          phone: "6868686868",
          isActive: true,
          isSuperAdmin: false,
          role: "62ca9ec9738ee38481256ddd",
          adresses: ["62ca9ec9738ee38481256dda", "62ca9ec9738ee38481256ddb"],
          staff: ["62ca9ec9738ee38481256ddb", "62ca9ec9738ee38481256dde"]
        }, 
        { 
          _id: "62ca9ec9738ee38481256ddf",
          profile_url: "https://i.pravatar.cc/300",
          name: "Entreprise 2",
          email: "entreprise2@gmail.com",
          password: "123456",
          phone: "6868686868",
          isActive: true,
          isSuperAdmin: false,
          adresses: ["62ca9ec9738ee38481256ddc", "62ca9ec9738ee38481256ddd"],
          role: "62ca9ec9738ee38481256ddd",
          staff: null
        },
        
        { 
          _id: "62ca9ec9738ee38481256ddb",
          profile_url: "https://i.pravatar.cc/300",
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
          profile_url: "https://i.pravatar.cc/300",
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