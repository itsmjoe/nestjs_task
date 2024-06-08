"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConfig = void 0;
const user_entity_1 = require("../src/user/user.entity");
const company_entity_1 = require("../src/company/company.entity");
const dotenv = require("dotenv");
dotenv.config();
exports.sequelizeConfig = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    models: [company_entity_1.Company, user_entity_1.User],
};
//# sourceMappingURL=sequelize.config.js.map