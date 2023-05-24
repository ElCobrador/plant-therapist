import { SwaggerDefinitionConstant } from "swagger-express-ts";

export abstract class PlantSwaggerDoc {

  public static GetAllUsers = {
    description: "Get all users",
    responses: {
      200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY, model: "User" }
    }
  }

  public static GetUserById = {
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
  }

  public static CreateUser = {
    description: "Create a new user",
    parameters: {
      body: { description: "New user", required: true, model: "User" }
    },
    responses: {
      200: { description: "Success" },
      400: { description: "" }
    }
  }

  public static UpdateUser = {
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
  }

  public static DeleteUser = {
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
  }
}