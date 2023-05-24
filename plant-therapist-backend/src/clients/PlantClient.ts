import { User } from '@/interfaces/User.interface';
import { injectable } from 'inversify';

@injectable()
export class PlantClient {

  public async findAllUsers(): Promise<User[]> {
    return undefined;
  }

  public async findUserById(userId: string): Promise<User> {
    return undefined;
  }

  public async createUser(user: User): Promise<User> {
    return undefined;
  }

  public async findUserByEmail(email: string): Promise<User> {
    return undefined;
  }

  public async updateUser(userId: string, user: User): Promise<User> {
    return undefined;
  }

  public async deleteUser(userId: string): Promise<User> {
    return undefined;
  }
}