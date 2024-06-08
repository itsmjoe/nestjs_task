"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sequelize_1 = require("@nestjs/sequelize");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const sequelize_config_1 = require("../config/sequelize.config");
const user_module_1 = require("./user/user.module");
const company_module_1 = require("./company/company.module");
const dynamic_module_1 = require("./dynamic.module");
const user_entity_1 = require("./user/user.entity");
const company_entity_1 = require("./company/company.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                driver: apollo_1.ApolloDriver,
            }),
            sequelize_1.SequelizeModule.forRootAsync({
                useFactory: () => ({
                    dialect: 'mysql',
                    models: [user_entity_1.User, company_entity_1.Company],
                    ...sequelize_config_1.sequelizeConfig,
                }),
            }),
            user_module_1.UserModule,
            company_module_1.CompanyModule,
            dynamic_module_1.DynamicModules.forRoot([user_entity_1.User, company_entity_1.Company]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map