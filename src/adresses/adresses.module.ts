import { Module } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { AdressesController } from './adresses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Adress, AdressSchema } from './adress.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Adress.name,
        schema: AdressSchema,
      },
    ]),
  ],
  controllers: [AdressesController],
  providers: [AdressesService]
})
export class AdressesModule {}
