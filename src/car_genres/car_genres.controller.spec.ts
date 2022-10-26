import { Test, TestingModule } from '@nestjs/testing';
import { CarGenresController } from './car_genres.controller';
import { CarGenresService } from './car_genres.service';

describe('CarGenresController', () => {
  let controller: CarGenresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarGenresController],
      providers: [CarGenresService],
    }).compile();

    controller = module.get<CarGenresController>(CarGenresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
