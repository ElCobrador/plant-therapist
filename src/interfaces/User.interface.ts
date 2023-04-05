import { Document, Types } from "mongoose";

export interface User extends Document<Types.ObjectId> {
  email: string;
  password: string;
  Devices: Array<string>;
  plants: Array<string>;
}
