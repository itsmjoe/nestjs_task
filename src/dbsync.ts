import { Sequelize } from 'sequelize-typescript';
import { Company } from './company/company.entity';
import { User } from './user/user.entity';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'wot',
  password: 'wot-test',
  database: 'test',
  models: [Company, User],
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });
