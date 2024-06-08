import { Model } from 'sequelize-typescript';
import { User } from './user.entity';
export declare class Company extends Model {
    id: number;
    name: string;
    user: User[];
    createdAt: Date;
    updatedAt: Date;
}
