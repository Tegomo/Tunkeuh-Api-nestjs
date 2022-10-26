import { Test, TestingModule } from '@nestjs/testing';
import { CarGenresService } from './car_genres.service';

describe('CarGenresService', () => {
  let service: CarGenresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarGenresService],
    }).compile();

    service = module.get<CarGenresService>(CarGenresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
