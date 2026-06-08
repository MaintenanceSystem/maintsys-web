import { inject, Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { HttpClient } from '@angular/common/http';
import { ILatheConfig } from '../../interfaces/lathe/lathe-config';
import { of } from 'rxjs';
import { IUniqueLatheConfig } from '../../interfaces/lathe/unique-lathe-config';

@Injectable({
  providedIn: 'root',
})
export class LatheService extends BaseService {
  private http = inject(HttpClient);
  endPoint = ''; //TO-DO: add backend path, when are ready

  private lathes: IUniqueLatheConfig[] = [
    {
      id: 'TC-01',
      name: 'Torno TC-01',
      model: 'Romi Tormax 20',
      rpm: 1200,
      temp: 52,
      efficiency: 91,
      vibration: 2.8,
      actualProcess: 'Usinagem de eixo Ø25mm - Aço 1045',
      status: 'success',
    },
    {
      id: 'TC-02',
      name: 'Torno TC-02',
      model: 'Romi Centur 30D',
      rpm: 870,
      temp: 69,
      efficiency: 74,
      vibration: 4.2,
      actualProcess: 'Torneamento cilíndrico - Alumínio 6061',
      status: 'warning',
    },
    {
      id: 'TC-07',
      name: 'Torno TC-07',
      model: 'Romi Centur 30D',
      rpm: 1780,
      temp: 82,
      efficiency: 61,
      vibration: 5.9,
      actualProcess: 'ATENÇÃO: Vibração excessiva detectada',
      status: 'danger',
    },
    {
      id: 'TC-04',
      name: 'Torno TC-04',
      model: 'Sanjo 150D',
      rpm: 0,
      temp: 25,
      efficiency: 0,
      vibration: 0,
      actualProcess: 'Manutenção preventiva - Troca de rolamentos',
      status: 'maintenance',
    },
  ];

  override getAll() {
    const lathes = this.lathes.map((value) => {
      return {
        id: value.id,
        model: value.model,
        name: value.name,
        status: value.status,
      } as ILatheConfig;
    });
    return of(lathes);
  }

  override get(id: string) {
    const lathe = this.lathes.find((value) => {
      return value.id == id;
    });
    
    return of(lathe);
  }
}
