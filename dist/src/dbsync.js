"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const company_entity_1 = require("./company/company.entity");
const user_entity_1 = require("./user/user.entity");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'wot',
    password: 'wot-test',
    database: 'test',
    models: [company_entity_1.Company, user_entity_1.User],
});
sequelize
    .sync({ force: false })
    .then(() => {
    console.log('Database and tables created!');
})
    .catch((error) => {
    console.error('Error synchronizing database:', error);
});
//# sourceMappingURL=dbsync.js.map