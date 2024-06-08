import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { sequelizeConfig } from '../config/sequelize.config';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { DynamicModules } from './dynamic.module';
import { User } from './user/user.entity';
import { Company } from './company/company.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'mysql',
        models: [User, Company],
        ...sequelizeConfig,
      }),
    }),
    UserModule,
    CompanyModule,
    DynamicModules.forRoot([User, Company]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
