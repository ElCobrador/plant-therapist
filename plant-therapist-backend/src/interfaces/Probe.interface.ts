import { Document, Types } from "mongoose";

export interface Probe {
  Id: string;
  Name: string;
  Readings: Array<Types.ObjectId>;
}
