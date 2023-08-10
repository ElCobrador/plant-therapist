import { SwaggerDefinitionConstant } from "swagger-express-ts";

export abstract class PlantSwaggerDoc {

  public static GetAllPlants = {
    description: "Get all plants",
    responses: {
      200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY, model: "CreatePlantDto" }
    }
  }

  public static GetPlantById = {
    path: "/{id}",
    description: "Get plant by Id",
    parameters: {
      path: {
        id: {
          description: "Id of the plant",
          type: SwaggerDefinitionConstant.Parameter.Type.STRING,
          required: true
        }
      }
    },
    responses: {
      200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.OBJECT, model: "CreatePlantDto" }
    }
  }

  public static CreatePlant = {
    description: "Create a new plant",
    parameters: {
      body: { description: "New plant", required: true, model: "CreatePlantDto" }
    },
    responses: {
      200: { description: "Success" },
      400: { description: "" }
    }
  }

  public static UpdatePlant = {
    path: "/{id}",
    description: "Update a plant",
    parameters: {
      path: {
        id: {
          description: "Id of the plant",
          type: SwaggerDefinitionConstant.Parameter.Type.STRING,
          required: true
        }
      },
      body: { description: "Update plant", required: true, model: "CreatePlantDto" }
    },
    responses: {
      200: { description: "Success" },
      400: { description: "" }
    }
  }

  public static DeletePlant = {
    path: "/{id}",
    description: "Delete a plant",
    parameters: {
      path: {
        id: {
          description: "Id of the plant",
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