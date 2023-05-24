import { ApiOperationDelete, ApiOperationGet, ApiOperationPost, ApiOperationPut, ApiPath } from 'swagger-express-ts';
import { inject, injectable } from 'inversify';
import { controller, httpDelete, httpGet, httpPost, httpPut, interfaces } from 'inversify-express-utils';
import { TYPES } from '@/types';
import { NextFunction, Request, Response } from 'express';
import { PlantService } from '@/services/Plants.service';
import { PlantSwaggerDoc } from './plant.swaggerDoc';

@ApiPath({
  path: "/plant",
  name: "Plant"
})
@controller("/plant")
@injectable()
export class PlantController implements interfaces.Controller {

  @inject(TYPES.PlantService)
  private PlantService: PlantService;

  @ApiOperationGet(PlantSwaggerDoc.GetAllUsers)
  @httpGet("/")
  private async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const findAllUsersData: Plant[] = await this.PlantService.findAllUser();

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  @ApiOperationGet(PlantSwaggerDoc.GetUserById)
  @httpGet("/:id")
  private async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: string = req.params.id;
      const findOneUserData: User = await this.UserService.findUserById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  @ApiOperationPost(PlantSwaggerDoc.CreateUser)
  @httpPost("/")
  private async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userData: User = req.body;
      const createUserData: User = await this.UserService.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  @ApiOperationPut(PlantSwaggerDoc.CreateUser)
  @httpPut("/:id")
  private async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: string = req.params.id;
      const userData: User = req.body;
      const updateUserData: User = await this.UserService.updateUser(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  @ApiOperationDelete(PlantSwaggerDoc.DeleteUser)
  @httpDelete("/:id")
  private async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: string = req.params.id;
      const deleteUserData: User = await this.UserService.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}