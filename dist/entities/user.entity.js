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
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const graphql_1 = require("@nestjs/graphql");
const company_entity_1 = require("../src/company/company.entity");
let User = class User extends sequelize_typescript_1.Model {
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, sequelize_typescript_1.ForeignKey)(() => company_entity_1.Company),
    (0, sequelize_typescript_1.Column)({ field: 'companyId' }),
    __metadata("design:type", Number)
], User.prototype, "companyId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => company_entity_1.Company),
    __metadata("design:type", company_entity_1.Company)
], User.prototype, "company", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, sequelize_typescript_1.Column)({ field: 'createdAt' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, sequelize_typescript_1.Column)({ field: 'updatedAt' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
exports.User = User = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, sequelize_typescript_1.Table)({ tableName: 'user', underscored: true, timestamps: true })
], User);
//# sourceMappingURL=user.entity.js.map