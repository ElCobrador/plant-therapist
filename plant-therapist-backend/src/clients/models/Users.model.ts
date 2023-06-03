import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'users', timestamps: true } })
class User {
  @prop({ type: String, required: true, unique: true })
  public email: string;

  @prop({ type: String, required: true })
  public password: string;

  @prop({ type: () => [String] })
  public plantIds: String[];

  @prop({ type: () => [String] })
  public devicesIds: String[];

  public createdAt?: Date;

  public updatedAt?: Date;
}

export const UserModel = getModelForClass(User);
