import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DataFactory, Seeder } from "nestjs-seeder";
import { Car } from "./car.schema";


@Injectable()
export class CarsSeeder implements Seeder {
  constructor(@InjectModel(Car.name) private readonly car: Model<Car>) {}

  async seed(): Promise<any> {
    // Generate roles.
    //const roles = DataFactory.createForClass(Role).generate(10);
    const cars = [
      { 
        _id: "62ca9ec9738ee38481256dda",
        matricule: "LT 265 B",
        carType: "62ca9ec9738ee38481256dda",
        marque: "BMW",
        model: "transport",
        couleur: "Noir",
        carGenre: "62ca9ec9738ee38481256ddb",
        puissance: "5000 CH",
        energie: "Essence",
        vitesse: "300 KM/H",
        kilometrage: "2000 KM",
        structure: "62ca9ec9738ee38481256ddd",
        driver: "62ca9ec9738ee38481256ddb",
        nbrPlaces: "5 Places",
        nbrPortes: "4 Portes",
        images: ["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],
      }, 
      { 
        _id: "62ca9ec9738ee38481256ddb",
        matricule: "NW 265 B",
        carType: "62ca9ec9738ee38481256dda",
        marque: "TOYOTA",
        model: "AVENSIS",
        couleur: "BLANC",
        carGenre: "62ca9ec9738ee38481256ddb",
        puissance: "5000 CH",
        energie: "Essence",
        vitesse: "300 KM/H",
        kilometrage: "2000 KM",
        structure: "62ca9ec9738ee38481256ddd",
        driver: "62ca9ec9738ee38481256ddb",
        nbrPlaces: "5 Places",
        nbrPortes: "4 Portes",
        images: ["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],
      },
  ];

    // Insert into the database.
    return this.car.insertMany(cars);
  }

  async drop(): Promise<any> {
    return this.car.deleteMany({});
  }
}