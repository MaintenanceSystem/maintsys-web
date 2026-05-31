export interface ILatheConfig {
    id : string
    name : string
    model : string
    rmp : number
    temp : number
    efficiency : number
    status : TLatheStatus
}

export type TLatheStatus = 'danger' | 'warning' | 'success' | 'maintenance'