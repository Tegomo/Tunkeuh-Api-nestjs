import { seeder } from "nestjs-seeder";
import { MongooseModule } from "@nestjs/mongoose";
import { Role, RoleSchema } from "./roles/role.schema";
import { RolesSeeder } from "./roles/roles.seeder";

seeder({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/issue-tracker"),
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
}).run([RolesSeeder]);