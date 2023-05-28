import { WateringThresholds } from "./WateringThresholds.interface";
import { Probe } from './Probe.interface';

export interface Plant {
  Id: string;
  FriendlyName: string;
  ScientificName: string;
  Description: string;
  WateringThresholds: WateringThresholds;
  AssignedProbeId: string;
}