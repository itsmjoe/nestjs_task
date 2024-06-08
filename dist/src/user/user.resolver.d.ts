import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    hello(): Promise<string>;
    getUsers(companyId?: number): Promise<User[]>;
    createUser(name: string, last_name: string, companyId: number): Promise<User>;
}
