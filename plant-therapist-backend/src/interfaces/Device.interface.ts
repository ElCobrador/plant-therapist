import { Document, Types } from "mongoose";

export interface Device {
  Id: string;
  Name: string;
  Probes: Array<string>;
  CurrentLocation: string;
}