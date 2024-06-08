import { User } from './user.entity';
export declare class UserService {
    private userModel;
    constructor(userModel: typeof User);
    create(name: string, last_name: string, companyId: number): Promise<User>;
    findAll(companyId?: number): Promise<User[]>;
}
