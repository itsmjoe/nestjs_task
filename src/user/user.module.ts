import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { Company } from '../company/company.entity';

@Module({
  imports: [SequelizeModule.forFeature([User, Company])],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
