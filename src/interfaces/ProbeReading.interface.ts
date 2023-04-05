import { Document, Types } from "mongoose";

export interface ProbeReading extends Document<Types.ObjectId> {
  ReceivedAt: string;
  ProbeId: string;
  PlantId: string;
}