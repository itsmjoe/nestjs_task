import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Company } from './company.entity';
import { CompanyService } from './company.service';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private companyService: CompanyService) {}

  @Query(() => [Company])
  async getCompanies() {
    return this.companyService.findAll();
  }

  @Mutation(() => Company)
  async createCompany(@Args('name') name: string): Promise<Company> {
    return this.companyService.create(name);
  }
}
