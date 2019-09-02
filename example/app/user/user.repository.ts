import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { User } from '../entity/User';

@Service()
export class UserRepository {
  @InjectRepository(User)
  private userRepository: Repository<User>;

  async findAll() {
    return await this.userRepository.find();
  }
}
