import http from "./http-common"
import { Plant } from "../models/Plant"

export async function getPlantById(plantId: string): Promise<Plant> {
  try {
    const response = await http.get<Plant>(`/plant/${plantId}`)
    return response.data;
  }
  catch (e: any) {
    throw e;
  }
}

export async function getAllPlants(): Promise<Plant[]> {
  try {
    const response = await http.get<Plant[]>('plant')
    return response.data;
  }
  catch (e: any) {
    throw e;
  }
}

export async function updatePlant(plantId: string, plantData: Plant) {
  try {
    const response = await http.put<any>(`/plant/${plantId}`, plantData);
  }
  catch (e: any) {
    throw e;
  }
}

export async function DeletePlant(plantId: string, plantData: Plant) {
  try {
    const response = await http.delete<any>(`/plant/${plantId}`);
  }
  catch (e: any) {
    throw e;
  }
}

