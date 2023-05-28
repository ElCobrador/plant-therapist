import { Plant } from '@/interfaces/Plant.interface';
import { injectable } from 'inversify';
import { PlantModel } from './models/Plant.model';

@injectable()
export class PlantClient {

  public async getAllPlants(): Promise<Plant[]> {
    const plants: Plant[] = await PlantModel.find();
    return plants;
  }

  public async findPlantById(plantId: string): Promise<Plant> {
    const plant: Plant = await PlantModel.findOne({ _id: plantId })
    return plant;
  }

  public async createPlant(plant: Plant): Promise<Plant> {
    const createdPlant = await PlantModel.create(plant)

    // TODO

    return plant;
  }

  public async updatePlant(plantId: string, plant: Plant): Promise<Plant> {
    return undefined;
  }

  public async deletePlant(plantId: string): Promise<Plant> {
    return undefined;
  }
}