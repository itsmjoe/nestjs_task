import { Model } from 'sequelize-typescript';
import { Company } from '../company/company.entity';
export declare class User extends Model<User> {
    id: number;
    name: string;
    last_name: string;
    companyId: number;
    company: Company;
    createdAt: Date;
    updatedAt: Date;
}
