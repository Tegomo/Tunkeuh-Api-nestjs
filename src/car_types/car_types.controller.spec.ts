import { Test, TestingModule } from '@nestjs/testing';
import { CarTypesController } from './car_types.controller';
import { CarTypesService } from './car_types.service';

describe('CarTypesController', () => {
  let controller: CarTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarTypesController],
      providers: [CarTypesService],
    }).compile();

    controller = module.get<CarTypesController>(CarTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
