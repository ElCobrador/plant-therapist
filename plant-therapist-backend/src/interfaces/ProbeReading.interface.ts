import { Document, Types } from "mongoose";

export interface ProbeReading extends Document<Types.ObjectId> {
  ReceivedAt: Date;
  PlantId: Types.ObjectId;
  value: Number;
}