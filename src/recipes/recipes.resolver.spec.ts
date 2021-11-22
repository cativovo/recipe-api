import { Test, TestingModule } from '@nestjs/testing';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import { nanoid } from 'nanoid';

describe('RecipesResolver', () => {
  let resolver: RecipesResolver;

  const mockRecipesService = {
    create: jest.fn().mockImplementation((createRecipeInput) => {
      const date = new Date();

      return Promise.resolve({
        ...createRecipeInput,
        id: nanoid(),
        createdAt: date.toLocaleString(),
        updatedAt: date.toLocaleString(),
      });
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipesResolver,
        {
          provide: RecipesService,
          useValue: mockRecipesService,
        },
      ],
    }).compile();

    resolver = module.get<RecipesResolver>(RecipesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create and return new recipe without tags', async () => {
    const createRecipeInput = { description: 'test', name: 'Adobo' };
    const recipe = await resolver.createRecipe(createRecipeInput);

    expect(recipe).toEqual({
      ...createRecipeInput,
      id: expect.any(String),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
    expect(mockRecipesService.create).toHaveBeenCalled();
  });

  it('should create and return new recipe with tags', async () => {
    const createRecipeInput = {
      description: 'test',
      name: 'Adobo',
      tags: ['test'],
    };
    const recipe = await resolver.createRecipe(createRecipeInput);

    expect(recipe).toEqual({
      ...createRecipeInput,
      id: expect.any(String),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
    expect(mockRecipesService.create).toHaveBeenCalled();
  });
});
