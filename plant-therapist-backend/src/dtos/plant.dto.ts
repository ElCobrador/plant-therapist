import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreatePlantDto {
  public FriendlyName: string;
  public ScientificName: string;
  public Description: string;
  public Probes: string[];
}

export class UpdatePlantDto {
  public FriendlyName: string;
  public ScientificName: string;
  public Description: string;
  public Probes: string[];
}
