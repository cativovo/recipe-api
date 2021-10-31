import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateRecipeInput {
  @Field()
  @MinLength(1)
  description: string;
}
