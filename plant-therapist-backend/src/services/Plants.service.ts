import { hash } from 'bcrypt';
import { CreateUserDto } from '@/dtos/user.dto';
import { HttpException } from '@/exceptions/httpException';
import { User } from '@/interfaces/User.interface';
import { UserModel } from '@/clients/models/Users.model';
import { inject, injectable } from 'inversify';
import { TYPES } from '@/types';
import { PlantClient } from '@/clients/PlantClient';

@injectable()
export class PlantService {

  @inject(TYPES.PlantClient)
  private PlantClient: PlantClient;

  public async getAllPlants(): Promise<User[]> {
    return await this.PlantClient.findAllUsers();
  }

  public async findPlantById(userId: string): Promise<User> {
    const findUser: User = await UserModel.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createPlant(userData: CreateUserDto): Promise<User> {
    let existingUser = await this.PlantClient.findUserByEmail(userData.email)
    if (existingUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const user = {
      email: userData.email,
      password: await hash(userData.password, 10)
    } as User;
    const newUser: User = await this.PlantClient.createUser(user)

    return newUser;
  }

  public async updatePlant(userId: string, userData: CreateUserDto): Promise<User> {
    if (userData.email) {
      const findUser: User = await this.PlantClient.findUserByEmail(userData.email);
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

  public async deletePlant(userId: string): Promise<User> {
    const deletedUser: User = await this.PlantClient.deleteUser(userId);
    if (!deletedUser) throw new HttpException(409, "User doesn't exist");

    return deletedUser;
  }
}
