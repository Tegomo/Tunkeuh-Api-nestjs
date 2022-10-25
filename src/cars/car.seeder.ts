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
        matricule: "transport",
        type: "coupés, berlines, pick-up, SUV",
        marque: "BMW",
        model: "transport",
        couleur: "Noir",
        genre: "Moto, Voiture, Camion, Tricycle",
        puissance: "",
        energie: "Essence, Gazoil, Electrique",
        vitesse: "Automatique, Manuel, Semi-automatique",
        kilometrage: "200 KM",
        nbrPlaces: "5 Places",
        nbrPortes: "4 Portes",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        carCategorie: "12ca9ec9738ee38481256dda",
      }, 
  ];

    // Insert into the database.
    return this.car.insertMany(cars);
  }

  async drop(): Promise<any> {
    return this.car.deleteMany({});
  }
}