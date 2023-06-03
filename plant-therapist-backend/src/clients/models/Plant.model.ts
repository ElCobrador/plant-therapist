import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'plant', timestamps: true } })
class Plant {
  @prop({ type: String, required: true })
  public FriendlyName: string;

  @prop({ type: String, required: false })
  public ScientificName: string;

  @prop({ type: String, required: false })
  public Description: string;

  @prop({ type: String, required: false })
  public AssignedProbeId: string;

  public createdAt?: Date;

  public updatedAt?: Date;
}

export const PlantModel = getModelForClass(Plant);
