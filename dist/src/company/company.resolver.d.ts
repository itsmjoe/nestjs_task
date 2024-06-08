import { Company } from './company.entity';
import { CompanyService } from './company.service';
export declare class CompanyResolver {
    private companyService;
    constructor(companyService: CompanyService);
    getCompanies(): Promise<Company[]>;
    createCompany(name: string): Promise<Company>;
}
