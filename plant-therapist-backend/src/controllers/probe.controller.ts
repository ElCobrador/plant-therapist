import { ApiOperationDelete, ApiOperationGet, ApiOperationPost, ApiOperationPut, ApiPath } from 'swagger-express-ts';
import { inject, injectable } from 'inversify';
import { controller, httpDelete, httpGet, httpPost, httpPut, interfaces } from 'inversify-express-utils';
import { TYPES } from '@/types';
import { NextFunction, Request, Response } from 'express';
import { PlantService } from '@/services/Plants.service';
import { PlantSwaggerDoc } from './plant.swaggerDoc';
import { Plant } from '@/interfaces/Plant.interface';
import { CreatePlantDto, UpdatePlantDto } from '../dtos/plant.dto';
import { ProbeService } from '@/services/probe.service';
import { Probe } from '@/interfaces/Probe.interface';

@ApiPath({
  path: "/probe",
  name: "Probe"
})
@controller("/probe")
@injectable()
export class ProbeController implements interfaces.Controller {

  @inject(TYPES.ProbeService)
  private ProbeService: ProbeService;

  @ApiOperationGet(PlantSwaggerDoc.GetAllProbes)
  @httpGet("/")
  private async getAllProbes(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const probes: Probe[] = await this.ProbeService.getAllProbes();

      res.status(200).json(probes);
    } catch (error) {
      next(error);
    }
  };

  @ApiOperationGet(PlantSwaggerDoc.GetPlantById)
  @httpGet("/:id")
  private async GetPlantById(req: Request, res: Response, next: NextFunction) {
    try {
      const plantId: string = req.params.id;
      const plant: Plant = await this.PlantService.getPlantById(plantId);

      res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  };

  @ApiOperationPost(PlantSwaggerDoc.CreatePlant)
  @httpPost("/")
  private async CreatePlant(req: Request, res: Response, next: NextFunction) {
    try {
      const requestedPlant: CreatePlantDto = req.body;
      const createdPlant: Plant = await this.PlantService.createPlant(requestedPlant);

      res.status(201).json(createdPlant);
    } catch (error) {
      next(error);
    }
  };

  @ApiOperationPut(PlantSwaggerDoc.UpdatePlant)
  @httpPut("/:id")
  private async UpdatePlant(req: Request, res: Response, next: NextFunction) {
    try {
      const plantId: string = req.params.id;
      const updatePlantDto: UpdatePlantDto = req.body;
      const updatedPlant: Plant = await this.PlantService.updatePlant(plantId, updatePlantDto);

      res.status(200).json(updatedPlant);
    } catch (error) {
      next(error);
    }
  };

  @ApiOperationDelete(PlantSwaggerDoc.DeletePlant)
  @httpDelete("/:id")
  private async DeletePlant(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: string = req.params.id;
      await this.PlantService.deletePlant(userId);

      res.status(200).json({ message: 'Plant deleted successfully.' });
    } catch (error) {
      next(error);
    }
  };
}