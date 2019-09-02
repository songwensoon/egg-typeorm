import { Service } from 'typedi';
import { UserRepository } from './user.repository';

@Service()
export class PostRepository {
  constructor(private userRepository: UserRepository) {}

  async queryUser() {
    return await this.userRepository.findAll();
  }
}
