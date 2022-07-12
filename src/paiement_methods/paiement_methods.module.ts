import { Module } from '@nestjs/common';
import { PaiementMethodsService } from './paiement_methods.service';
import { PaiementMethodsController } from './paiement_methods.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaiementMethod, PaiementMethodSchema } from './paiement_method.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PaiementMethod.name,
        schema: PaiementMethodSchema,
      },
    ]),
  ],
  controllers: [PaiementMethodsController],
  providers: [PaiementMethodsService]
})
export class PaiementMethodsModule {}
