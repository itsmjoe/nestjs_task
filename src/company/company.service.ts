import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './company.entity';
import { User } from '../user/user.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company)
    private companyModel: typeof Company,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.companyModel.findAll({ include: [User] });
  }

  async create(name: string): Promise<Company> {
    const company = new Company();
    company.name = name;
    return company.save();
  }
}
