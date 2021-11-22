import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsOptional,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateRecipeInput {
  @Field()
  @MinLength(3)
  description: string;

  @Field()
  @MinLength(3)
  name: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  tags?: string[];
}
