import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipeModule } from 'src/recipe/recipe.module';
import { validate } from 'src/utils/env-validation';

@Module({
  imports: [
    // modules from packages
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      validate,
    }),

    // my modules
    RecipeModule,
  ],
})
export class AppModule {}
