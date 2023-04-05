import { CreateUserDto, UpdateUserDto } from '@/dtos/user.dto';
import { User } from '@/interfaces/User.interface';
import { UserModel } from '@/models/users.model';
import { injectable } from 'inversify';

@injectable()
export class UserClient {

  public async findAllUsers(): Promise<User[]> {
    const users: User[] = await UserModel.find();
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    const findUser: User = await UserModel.findOne({ _id: userId });
    return findUser;
  }

  public async createUser(user: User): Promise<User> {
    const createUserData: User = await UserModel.create({ user });
    return createUserData;
  }

  public async findUserByEmail(email: string): Promise<User> {
    const user: User = await UserModel.findOne({ email: email });
    return user;
  }

  public async updateUser(userId: string, user: User): Promise<User> {
    const updateUserById: User = await UserModel.findByIdAndUpdate(userId, { user });
    return updateUserById;
  }

  public async deleteUser(userId: string): Promise<User> {
    const deleteUserById: User = await UserModel.findByIdAndDelete(userId);
    return deleteUserById;
  }
}