import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';
import { PlantDtoSwaggerDoc } from './plant.dto.swagger';

@ApiModel({
  description: "Create plant DTO",
  name: "CreatePlantDto"
})
export class CreatePlantDto {

  @ApiModelProperty(PlantDtoSwaggerDoc.FriendlyName)
  public FriendlyName: string;

  @ApiModelProperty(PlantDtoSwaggerDoc.ScientificName)
  public ScientificName: string;

  @ApiModelProperty(PlantDtoSwaggerDoc.Description)
  public Description: string;

  @ApiModelProperty(PlantDtoSwaggerDoc.AssignedProbeId)
  public AssignedProbeId: string;
}

@ApiModel({
  description: "Update plant DTO",
  name: "UpdatePlantDto"
})
export class UpdatePlantDto {

  @ApiModelProperty(PlantDtoSwaggerDoc.FriendlyName)
  public FriendlyName: string;

  @ApiModelProperty(PlantDtoSwaggerDoc.ScientificName)
  public ScientificName: string;

  @ApiModelProperty(PlantDtoSwaggerDoc.Description)
  public Description: string;

  @ApiModelProperty(PlantDtoSwaggerDoc.AssignedProbeId)
  public AssignedProbeId: string;
}
