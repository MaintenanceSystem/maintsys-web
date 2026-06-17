import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  abstract endPoint: string;
  private readonly host = environment.API_URL;

  get(id: any) {
    throw Error('Method not implemented');
  }
  getAll() {
    throw Error('Method not implemented');
  }
  post(model: any) {
    throw Error('Method not implemented');
  }
  patch(id: any, model: Partial<any>) {
    throw Error('Method not implemented');
  }
}
