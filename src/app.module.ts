import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssuesModule } from './issues/issues.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { ServicesModule } from './services/services.module';
import { AdressesModule } from './adresses/adresses.module';
import { PaiementMethodsModule } from './paiement_methods/paiement_methods.module';
import { EntreprisesModule } from './entreprises/entreprises.module';
import { CarsModule } from './cars/cars.module';
import { CarCategoriesModule } from './car_categories/car_categories.module';
import { CarTypesModule } from './car_types/car_types.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dbUser:dbUser@cluster0.24fpq3x.mongodb.net/?retryWrites=true&w=majority'),
    IssuesModule,
    AuthModule,
    UsersModule,
    RolesModule,
    ServicesModule,
    AdressesModule,
    PaiementMethodsModule,
    EntreprisesModule,
    CarsModule,
    CarCategoriesModule,
    CarTypesModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
