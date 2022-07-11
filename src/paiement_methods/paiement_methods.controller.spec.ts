import { Test, TestingModule } from '@nestjs/testing';
import { PaiementMethodsController } from './paiement_methods.controller';
import { PaiementMethodsService } from './paiement_methods.service';

describe('PaiementMethodsController', () => {
  let controller: PaiementMethodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaiementMethodsController],
      providers: [PaiementMethodsService],
    }).compile();

    controller = module.get<PaiementMethodsController>(PaiementMethodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
