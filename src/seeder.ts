import { seeder } from "nestjs-seeder";
import { MongooseModule } from "@nestjs/mongoose";
import { Role, RoleSchema } from "./roles/role.schema";
import { RolesSeeder } from "./roles/roles.seeder";
import { ServicesSeeder } from "./services/services.seeder";
import { Service, ServiceSchema } from "./services/service.schema";
import { PaiementMethodsSeeder } from "./paiement_methods/paiement_methods.seeder";
import { PaiementMethod, PaiementMethodSchema } from "./paiement_methods/paiement_method.schema";
import { AdressesSeeder } from "./adresses/adress.seeder";
import { Adress, AdressSchema } from "./adresses/adress.schema";
import { User, UserSchema } from "./users/user.schema";
import { UsersSeeder } from "./users/users.seeder";
import { CarCategorie, CarCategorieSchema } from "./car_categories/car_categorie.schema";
import { CarCategoriesSeeder } from "./car_categories/car_categories.seeder";

seeder({
  imports: [
    MongooseModule.forRoot("mongodb+srv://TESTMongo:TESTMongo@cluster0.24fpq3x.mongodb.net/?retryWrites=true&w=majority"),
    MongooseModule.forFeature([
      { name: Role.name, schema: RoleSchema },
      { name: Service.name, schema: ServiceSchema },
      { name: PaiementMethod.name, schema: PaiementMethodSchema },
      { name: User.name, schema: UserSchema },
      { name: Adress.name, schema: AdressSchema },
      { name: CarCategorie.name, schema: CarCategorieSchema }
    ]),
  ],
}).run([RolesSeeder, ServicesSeeder,PaiementMethodsSeeder, AdressesSeeder, UsersSeeder,CarCategoriesSeeder]);