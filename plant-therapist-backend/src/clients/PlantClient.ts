import { Plant } from '@/interfaces/Plant.interface';
import { injectable } from 'inversify';

@injectable()
export class PlantClient {

  public async getAllPlants(): Promise<Plant[]> {
    return undefined;
  }

  public async findPlantById(plantId: string): Promise<Plant> {
    return undefined;
  }

  public async createPlant(plant: Plant): Promise<Plant> {
    return undefined;
  }

  public async updatePlant(plantId: string, plant: Plant): Promise<Plant> {
    return undefined;
  }

  public async deletePlant(plantId: string): Promise<Plant> {
    return undefined;
  }
}