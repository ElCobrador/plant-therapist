import { Probe } from '@/interfaces/Probe.interface';
import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

class Device {

  public name: string;

  public probes: Array<Probe>;
}