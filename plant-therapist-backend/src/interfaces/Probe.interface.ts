import { Document, Types } from "mongoose";

export interface Probe {
  Name: string;
  Readings: Array<Types.ObjectId>;
}
