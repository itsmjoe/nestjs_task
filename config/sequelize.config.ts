import { SequelizeOptions } from 'sequelize-typescript';
import { User } from '../src/user/user.entity';
import { Company } from '../src/company/company.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const sequelizeConfig: SequelizeOptions = {
  dialect: process.env.DB_DIALECT as 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  models: [Company, User],
};


