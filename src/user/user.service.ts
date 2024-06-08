import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import { Company } from '../company/company.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(
    name: string,
    last_name: string,
    companyId: number,
  ): Promise<User> {
    const user = new User();
    user.name = name;
    user.last_name = last_name;
    user.companyId = companyId;
    return user.save();
  }

  async findAll(companyId?: number): Promise<User[]> {
    if (companyId) {
      return this.userModel.findAll({ where: { companyId } });
    }
    return this.userModel.findAll();
  }
}
