import { Document, Types } from "mongoose";

export interface ProbeReading {
  Id: string;
  ReceivedAt: Date;
  PlantId: Types.ObjectId;
  value: Number;
}