import { Document, Types } from "mongoose";

export interface ProbeReading extends Document<Types.ObjectId> {
  ReceivedAt: string;
  Probe_Id: string;
  PlantId: string;
}
