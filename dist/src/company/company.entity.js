"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../user/user.entity");
let Company = class Company extends sequelize_typescript_1.Model {
};
exports.Company = Company;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_entity_1.User]),
    (0, sequelize_typescript_1.HasMany)(() => user_entity_1.User),
    __metadata("design:type", Array)
], Company.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, sequelize_typescript_1.Column)({ field: 'createdAt' }),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, sequelize_typescript_1.Column)({ field: 'updatedAt' }),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
exports.Company = Company = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, sequelize_typescript_1.Table)({ tableName: 'company', underscored: true, timestamps: true })
], Company);
//# sourceMappingURL=company.entity.js.map