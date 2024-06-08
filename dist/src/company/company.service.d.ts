import { Company } from './company.entity';
export declare class CompanyService {
    private companyModel;
    constructor(companyModel: typeof Company);
    findAll(): Promise<Company[]>;
    create(name: string): Promise<Company>;
}
