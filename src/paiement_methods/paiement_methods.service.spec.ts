import { Test, TestingModule } from '@nestjs/testing';
import { PaiementMethodsService } from './paiement_methods.service';

describe('PaiementMethodsService', () => {
  let service: PaiementMethodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaiementMethodsService],
    }).compile();

    service = module.get<PaiementMethodsService>(PaiementMethodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
