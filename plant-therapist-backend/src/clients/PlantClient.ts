import { Plant } from '@/interfaces/Plant.interface';
import { injectable } from 'inversify';
import { PlantModel } from './models/Plant.model';
import { WateringThresholds } from '../interfaces/WateringThresholds.interface';

@injectable()
export class PlantClient {

  public async getAllPlants(): Promise<Plant[]> {
    const allPlants = await PlantModel.find();

    let plants: Plant[] = [];
    allPlants.forEach(element => {
      plants.push(this.MapPlantModelToPlant(element._id.toString(), element));
    });
    return plants;
  }

  public async findPlantById(plantId: string): Promise<Plant> {
    const plant = await PlantModel.findOne({ _id: plantId })
    return this.MapPlantModelToPlant(plantId, plant);
  }

  public async createPlant(plant: Plant): Promise<Plant> {
    const createdPlantData = await PlantModel.create(plant)

    const createdPlant = this.MapPlantModelToPlant(createdPlantData._id.toString(), createdPlantData);

    return createdPlant;
  }

  public async updatePlant(plantId: string, plant: Plant): Promise<Plant> {
    let updatedPlantData = await PlantModel.findByIdAndUpdate(plantId, plant);
    updatedPlantData = await PlantModel.findById(plantId);

    const updatedPlant = this.MapPlantModelToPlant(plantId, updatedPlantData);

    return updatedPlant;
  }

  public async deletePlant(plantId: string): Promise<Plant> {
    let deletedPlant = await PlantModel.findByIdAndDelete(plantId);
    return this.MapPlantModelToPlant(plantId, deletedPlant);
  }

  private MapPlantModelToPlant(plantId: string, sourcePlant: any): Plant {
    const plant: Plant = {
      Id: plantId,
      FriendlyName: sourcePlant.FriendlyName,
      ScientificName: sourcePlant.ScientificName,
      Description: sourcePlant.Description,
      AssignedProbeId: sourcePlant.AssignedProbeId
    }

    return plant;
  }
}