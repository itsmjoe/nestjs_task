import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => String)
  async hello() {
    return 'Hello World';
  }

  @Query(() => [User])
  async getUsers(
    @Args('companyId', { type: () => Int, nullable: true }) companyId?: number,
  ) {
    if (companyId) {
      return this.userService.findAll(companyId);
    }
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(
    @Args('name') name: string,
    @Args('last_name') last_name: string,
    @Args('companyId') companyId: number,
  ) {
    return this.userService.create(name, last_name, companyId);
  }
}
