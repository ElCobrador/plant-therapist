import { NextFunction, Request, Response } from 'express';
import { User } from '@/interfaces/User.interface';
import { UserService } from '@services/users.service';
import { ApiOperationDelete, ApiOperationGet, ApiOperationPost, ApiOperationPut, ApiPath, SwaggerDefinitionConstant } from 'swagger-express-ts';
import { controller, httpDelete, httpGet, httpPost, httpPut, interfaces } from 'inversify-express-utils';
import { inject, injectable } from 'inversify';
import { TYPES } from '@/types';
import { UserSwaggerDoc } from './user.swaggerDoc';

@ApiPath({
  path: "/users",
  name: "Users",
})
@controller("/users")
@injectable()
export class UserController implements interfaces.Controller {

  @inject(TYPES.UserService)
  private UserService: UserService;

  @ApiOperationGet(UserSwaggerDoc.GetAllUsers)
  @httpGet("/")
  private async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const findAllUsersData: User[] = await this.UserService.findAllUser();

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  @ApiOperationGet(UserSwaggerDoc.GetUserById)
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

  @ApiOperationPost(UserSwaggerDoc.CreateUser)
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

  @ApiOperationPut(UserSwaggerDoc.CreateUser)
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

  @ApiOperationDelete(UserSwaggerDoc.DeleteUser)
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
