import { Table, Column, Model, ForeignKey, PrimaryKey, AutoIncrement, BelongsTo } from 'sequelize-typescript';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Company } from '../company/company.entity';
import { Timestamp } from 'rxjs';

@ObjectType()
@Table({ tableName: 'user', underscored: true, timestamps: true})
export class User extends Model<User> {
  @Field()
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Field()
  @Column
  name: string;

  @Field()
  @Column
  last_name: string;

  @Field(() => Int)
  @ForeignKey(() => Company)
  @Column({ field: 'companyId' })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @Field()
  @Column({ field: 'createdAt' })
  createdAt: Date;

  @Field()
  @Column({ field: 'updatedAt' })
  updatedAt: Date;
}