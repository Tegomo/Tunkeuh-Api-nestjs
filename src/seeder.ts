import { seeder } from "nestjs-seeder";
import { MongooseModule } from "@nestjs/mongoose";
import { Role, RoleSchema } from "./roles/role.schema";
import { RolesSeeder } from "./roles/roles.seeder";
import { ServicesSeeder } from "./services/services.seeder";
import { Service, ServiceSchema } from "./services/service.schema";
import { VehicleCategory, VehicleCategorySchema } from "./vehicles_categories/vehicles_category.schema";
import { VehicleCategoriesSeeder } from "./vehicles_categories/vehicles_categories.seeder";

seeder({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/issue-tracker"),
    MongooseModule.forFeature([
      { name: Role.name, schema: RoleSchema },
      { name: Service.name, schema: ServiceSchema },
      { name: VehicleCategory.name, schema: VehicleCategorySchema }
    ]),
  ],
}).run([RolesSeeder, ServicesSeeder, VehicleCategoriesSeeder]);