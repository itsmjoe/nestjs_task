import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user.entity';

@ObjectType()
@Table({ tableName: 'company', underscored: true, timestamps: true})
export class Company extends Model {
  @Field(() => ID)
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Field()
  @Column
  name: string;

  @Field(() => [User])
  @HasMany(() => User)
  user: User[];

  @Field()
  @Column({ field: 'createdAt' })
  createdAt: Date;

  @Field()
  @Column({ field: 'updatedAt' })
  updatedAt: Date;
}