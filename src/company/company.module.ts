import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './company.entity';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { User } from '../user/user.entity';

@Module({
  imports: [SequelizeModule.forFeature([Company, User])],
  providers: [CompanyService, CompanyResolver],
  exports: [CompanyService],
})
export class CompanyModule {}
