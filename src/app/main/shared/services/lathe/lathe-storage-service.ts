import { computed, Injectable, signal } from '@angular/core';
import { ILatheConfig } from '../../interfaces/lathe/lathe-config';

@Injectable({
  providedIn: 'root',
})
export class LatheStorageService {
  private _lathes = signal<ILatheConfig[]>([
  {
    id: 'TC-01',
    name: 'Torno TC-01',
    model: 'Romi Tormax 20',
    rmp: 1200,
    temp: 52,
    efficiency: 91,
    status: 'success'
  },
  {
    id: 'TC-02',
    name: 'Torno TC-02',
    model: 'Romi Centur 30D',
    rmp: 870,
    temp: 69,
    efficiency: 74,
    status: 'warning'
  },
  {
    id: 'TC-07',
    name: 'Torno TC-07',
    model: 'Romi Centur 30D',
    rmp: 1780,
    temp: 82,
    efficiency: 61,
    status: 'danger'
  },
  {
    id: 'TC-04',
    name: 'Torno TC-04',
    model: 'Sanjo 150D',
    rmp: 0,
    temp: 25,
    efficiency: 0,
    status: 'maintenance'
  }
]); //TO-DO: Switch to just one signal here
  private _lathe = signal<ILatheConfig>({
    id: 'TC-04',
    name: 'Torno TC-04',
    model: 'Sanjo 150D',
    rmp: 0,
    temp: 25,
    efficiency: 0,
    status: 'maintenance'
  });
  
  getLathes = computed(() => {
    return this._lathes()
  })

  getLathe = computed(() => {
    return this._lathe()
  })

  setDatas(data : any) {
    if(Array.isArray(data)) {
      this._lathes.set(data)
    } else {
      this._lathe.set(data)
    }
  }
}
