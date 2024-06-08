import { Module, DynamicModule } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.entity';
import { Company } from './company/company.entity';
import { UserResolver } from './user/user.resolver';
import { CompanyResolver } from './company/company.resolver';
import { UserService } from './user/user.service';
import { CompanyService } from './company/company.service';

@Module({})
export class DynamicModules{
  static forRoot(entities = [], options?): DynamicModule {
    return {
      module: DynamicModules,
      imports: [SequelizeModule.forFeature([...entities, User, Company])],
      providers: [UserService, UserResolver, CompanyService, CompanyResolver],
      exports: [UserService, CompanyService],
    };
  }
}

export { DynamicModule };