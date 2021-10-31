import { Field, ID, ObjectType } from '@nestjs/graphql';
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
  @Column('text')
  description: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
