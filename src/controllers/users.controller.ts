import { NextFunction, Request, Response } from 'express';
import { User } from '@interfaces/users.interface';
import { UserService } from '@services/users.service';
import { ApiOperationDelete, ApiOperationGet, ApiOperationPost, ApiOperationPut, ApiPath, SwaggerDefinitionConstant } from 'swagger-express-ts';
import { controller, httpDelete, httpGet, httpPost, httpPut, interfaces } from 'inversify-express-utils';
import { inject, injectable } from 'inversify';

@ApiPath({
  path: "/users",
  name: "Users",
})
@controller("/users")
@injectable()
export class UserController implements interfaces.Controller {
  public static TARGET_NAME: string = "UserController";

  @inject("UserService")
  private UserService: UserService;

  @ApiOperationGet({
    description: "Get all users",
    responses: {
      200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY, model: "User" }
    }
  })
  @httpGet("/")
  private async getUsers(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const findAllUsersData: User[] = await this.UserService.findAllUser();

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  @ApiOperationGet({
    path: "/{id}",
    description: "Get user by id",
    parameters: {
      path: {
        id: {
          description: "Id of the user",
          type: SwaggerDefinitionConstant.Parameter.Type.STRING,
          required: true
        }
      }
    },
    responses: {
      200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.OBJECT, model: "User" }
    }
  })
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

  @ApiOperationPost({
    description: "Create a new user",
    parameters: {
      body: { description: "New user", required: true, model: "User" }
    },
    responses: {
      200: { description: "Success" },
      400: { description: "" }
    }
  })
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

  @ApiOperationPut({
    path: "/{id}",
    description: "Update a user",
    parameters: {
      path: {
        id: {
          description: "Id of the user",
          type: SwaggerDefinitionConstant.Parameter.Type.STRING,
          required: true
        }
      },
      body: { description: "Update user", required: true, model: "User" }
    },
    responses: {
      200: { description: "Success" },
      400: { description: "" }
    }
  })
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

  @ApiOperationDelete({
    path: "/{id}",
    description: "Delete a user",
    parameters: {
      path: {
        id: {
          description: "Id of the user",
          type: SwaggerDefinitionConstant.Parameter.Type.STRING,
          required: true
        }
      }
    },
    responses: {
      200: { description: "Success" },
      400: { description: "" }
    }
  })
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
