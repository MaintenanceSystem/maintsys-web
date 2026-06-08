import { ILatheConfig } from './lathe-config';

export interface IUniqueLatheConfig extends ILatheConfig {
  vibration: number;
  rpm: number;
  temp: number;
  efficiency: number;
  actualProcess: string;
}
