import { hash } from 'bcrypt';
import { CreateUserDto } from '@/dtos/user.dto';
import { HttpException } from '@/exceptions/httpException';
import { User } from '@/interfaces/User.interface';
import { UserModel } from '@/clients/models/Users.model';
import { inject, injectable } from 'inversify';
import { UserClient } from '@/clients/UserClient';
import { TYPES } from '@/types';

@injectable()
export class UserService {

  @inject(TYPES.UserClient)
  private UserClient: UserClient;

  public async findAllUser(): Promise<User[]> {
    return await this.UserClient.findAllUsers();
  }

  public async findUserById(userId: string): Promise<User> {
    const findUser: User = await UserModel.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    let existingUser = await this.UserClient.findUserByEmail(userData.email)
    if (existingUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const user = {
      email: userData.email,
      password: await hash(userData.password, 10)
    } as User;
    const newUser: User = await this.UserClient.createUser(user)

    return newUser;
  }

  public async updateUser(userId: string, userData: CreateUserDto): Promise<User> {
    if (userData.email) {
      const findUser: User = await this.UserClient.findUserByEmail(userData.email);
      if (findUser && findUser.id != userId) throw new HttpException(409, `This email ${userData.email} already exists`);
    }

    if (userData.password) {
      const hashedPassword = await hash(userData.password, 10);
      userData = { ...userData, password: hashedPassword };
    }

    const updateUserById: User = await UserModel.findByIdAndUpdate(userId, { userData });
    if (!updateUserById) throw new HttpException(409, "User doesn't exist");

    return updateUserById;
  }

  public async deleteUser(userId: string): Promise<User> {
    const deletedUser: User = await this.UserClient.deleteUser(userId);
    if (!deletedUser) throw new HttpException(409, "User doesn't exist");

    return deletedUser;
  }
}
