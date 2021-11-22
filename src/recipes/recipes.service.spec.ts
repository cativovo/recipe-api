import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  let service: RecipesService;

  const mockRecipeRepository = {
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipesService,
        {
          provide: getRepositoryToken(Recipe),
          useValue: mockRecipeRepository,
        },
      ],
    }).compile();

    service = module.get<RecipesService>(RecipesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call save', async () => {
    const createInput = {
      description: 'Description',
      name: 'Adobo',
      tags: ['test'],
    };
    await service.create(createInput);

    expect(mockRecipeRepository.save).toHaveBeenCalledWith({
      ...createInput,
      id: expect.any(String),
    });
  });
});
