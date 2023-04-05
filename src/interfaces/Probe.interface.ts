import { Document, Types } from "mongoose";

export interface Probe extends Document<Types.ObjectId> {
  Name: string;
  Readings: Array<string>;
}
