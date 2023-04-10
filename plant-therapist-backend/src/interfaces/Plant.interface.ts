import { Document, Types } from "mongoose";
import { WateringThresholds } from "./WateringThresholds.interface";

export interface ProbeReading extends Document<Types.ObjectId> {
  Name: string;
  Species: string;
  WateringThresholds: WateringThresholds;
}