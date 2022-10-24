import { Test, TestingModule } from '@nestjs/testing';
import { CarCategoriesController } from './car_categories.controller';
import { CarCategoriesService } from './car_categories.service';

describe('CarCategoriesController', () => {
  let controller: CarCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarCategoriesController],
      providers: [CarCategoriesService],
    }).compile();

    controller = module.get<CarCategoriesController>(CarCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
