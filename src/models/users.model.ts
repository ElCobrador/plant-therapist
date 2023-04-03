import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel({
  description: "User description",
  name: "User"
})
@modelOptions({ schemaOptions: { collection: 'users', timestamps: true } })
class User {

  @ApiModelProperty({
    description: "User's email.",
    required: true
  })
  @prop({ type: String, required: true, unique: true })
  public email: string;

  @ApiModelProperty({
    description: "User's password.",
    required: true
  })
  @prop({ type: String, required: true })
  public password: string;

  public createdAt?: Date;

  public updatedAt?: Date;
}

export const UserModel = getModelForClass(User);
