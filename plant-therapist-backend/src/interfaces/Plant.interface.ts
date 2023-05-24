import { Document, Types } from "mongoose";
import { WateringThresholds } from "./WateringThresholds.interface";

export interface Plant {
  Id: string;
  Name: string;
  Species: string;
  WateringThresholds: WateringThresholds;
}