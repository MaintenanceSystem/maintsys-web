export interface ILatheConfig {
  id: string;
  name: string;
  model: string;
  status: TLatheStatus;
}

export type TLatheStatus = 'danger' | 'warning' | 'success' | 'maintenance';
