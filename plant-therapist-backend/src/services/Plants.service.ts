import { hash } from 'bcrypt';
import { CreateUserDto } from '@/dtos/user.dto';
import { HttpException } from '@/exceptions/httpException';
import { inject, injectable } from 'inversify';
import { TYPES } from '@/types';
import { PlantClient } from '@/clients/PlantClient';
import { Plant } from '@/interfaces/Plant.interface';
import { CreatePlantDto, UpdatePlantDto } from '../dtos/plant.dto';
import { Probe } from '@/interfaces/Probe.interface';

@injectable()
export class PlantService {

  @inject(TYPES.PlantClient)
  private PlantClient: PlantClient;

  public async getAllPlants(): Promise<Plant[]> {
    return await this.PlantClient.getAllPlants();
  }

  public async getPlantById(plantId: string): Promise<Plant> {
    const findUser: Plant = await this.PlantClient.findPlantById(plantId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createPlant(createPlantDto: CreatePlantDto): Promise<Plant> {
    const plant: Plant = {
      Id: undefined,
      FriendlyName: createPlantDto.FriendlyName,
      ScientificName: createPlantDto.ScientificName,
      Description: createPlantDto.Description,
      AssignedProbeId: createPlantDto.AssignedProbeId,
      WateringThresholds: undefined
    }
    const createdPlant: Plant = await this.PlantClient.createPlant(plant)

    return createdPlant;
  }

  public async updatePlant(plantId: string, updatePlantDto: UpdatePlantDto): Promise<Plant> {
    const currentPlant: Plant = await this.PlantClient.findPlantById(plantId);

    if (!currentPlant) throw new HttpException(409, "This Plant doesn't exist");

    const updatedPlant: Plant = await this.PlantClient.updatePlant(plantId, {
      ...currentPlant,
      FriendlyName: updatePlantDto.FriendlyName,
      ScientificName: updatePlantDto.ScientificName,
      Description: updatePlantDto.Description,
      AssignedProbeId: updatePlantDto.AssignedProbeId,
    });

    return updatedPlant;
  }

  public async deletePlant(userId: string): Promise<Plant> {
    const deletedUser: Plant = await this.PlantClient.deletePlant(userId);
    if (!deletedUser) throw new HttpException(409, "Plant doesn't exist");

    return deletedUser;
  }
}
