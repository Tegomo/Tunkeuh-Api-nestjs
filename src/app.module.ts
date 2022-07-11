import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssuesModule } from './issues/issues.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { ServicesModule } from './services/services.module';
import { VehiclesCategoriesModule } from './vehicles_categories/vehicles_categories.module';
import { PaiementMethodsModule } from './paiement_methods/paiement_methods.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/issue-tracker'),
    IssuesModule,
    AuthModule,
    UsersModule,
    RolesModule,
    ServicesModule,
    VehiclesCategoriesModule,
    PaiementMethodsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
