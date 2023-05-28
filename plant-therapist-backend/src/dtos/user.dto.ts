import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';
import { UserDtoSwaggerDoc } from './user.dto.swagger';

@ApiModel({
  description: "Create user DTO",
  name: "CreateUserDto"
})
export class CreateUserDto {

  @ApiModelProperty(UserDtoSwaggerDoc.Email)
  @IsEmail()
  public email: string;

  // @IsString()
  // @IsNotEmpty()
  // @MinLength(9)
  // @MaxLength(32)
  @ApiModelProperty(UserDtoSwaggerDoc.Password)
  public password: string;
}

@ApiModel({
  description: "Update user DTO",
  name: "UpdateUserDto"
})
export class UpdateUserDto {
  // @IsString()
  // @IsNotEmpty()
  // @MinLength(9)
  // @MaxLength(32)
  @ApiModelProperty(UserDtoSwaggerDoc.Password)
  public password: string;
}
