import { Document, Types } from "mongoose";

export interface User {
  id: string;
  email: string;
  password: string;
  Devices: Array<Types.ObjectId>;
  plants: Array<Types.ObjectId>;
}
