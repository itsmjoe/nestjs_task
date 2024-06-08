"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DynamicModules_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicModules = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_entity_1 = require("./user/user.entity");
const company_entity_1 = require("./company/company.entity");
const user_resolver_1 = require("./user/user.resolver");
const company_resolver_1 = require("./company/company.resolver");
const user_service_1 = require("./user/user.service");
const company_service_1 = require("./company/company.service");
let DynamicModules = DynamicModules_1 = class DynamicModules {
    static forRoot(entities = [], options) {
        return {
            module: DynamicModules_1,
            imports: [sequelize_1.SequelizeModule.forFeature([...entities, user_entity_1.User, company_entity_1.Company])],
            providers: [user_service_1.UserService, user_resolver_1.UserResolver, company_service_1.CompanyService, company_resolver_1.CompanyResolver],
            exports: [user_service_1.UserService, company_service_1.CompanyService],
        };
    }
};
exports.DynamicModules = DynamicModules;
exports.DynamicModules = DynamicModules = DynamicModules_1 = __decorate([
    (0, common_1.Module)({})
], DynamicModules);
//# sourceMappingURL=dynamic.module.js.map