import { CreatePlantDto } from "@dtos/plant.dto";
import { CreateUserDto } from './dtos/user.dto';

// For swagger-express-ts models declarations to work, the class needs to be instanciated once. 
export function initializeSwaggerConfig() {
  const createPlantDto = new CreatePlantDto();
  const createUserDto = new CreateUserDto();
}