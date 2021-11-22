import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ArrayMaxSize, ArrayMinSize, MinLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Recipe {
  @Field(() => ID)
  @PrimaryColumn()
  id: string;

  @Field()
  @Column('varchar', { length: 200 })
  name: string;

  @Field()
  @Column('text')
  description: string;

  @Field(() => [String], { nullable: true })
  @Column('varchar', { array: true, nullable: true })
  tags?: string[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
