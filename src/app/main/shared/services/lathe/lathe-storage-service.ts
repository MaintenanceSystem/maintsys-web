import { computed, inject, Injectable, signal } from '@angular/core';
import { ILatheConfig } from '../../interfaces/lathe/lathe-config';
import { LatheService } from './lathe-service';
import { IUniqueLatheConfig } from '../../interfaces/lathe/unique-lathe-config';

@Injectable({
  providedIn: 'root',
})
export class LatheStorageService {
  private _lathes = signal<ILatheConfig[]>([]);
  private _lathe = signal<IUniqueLatheConfig | null>(null);

  private _latheService = inject(LatheService);

  getLathes = computed(() => {
    return this._lathes();
  });

  getLathe = computed(() => {
    return this._lathe();
  });

  constructor() {
    this.setDataService();
  }

  private setDataService() {
    this._latheService.getAll().subscribe({
      next: (value) => {
        // Once the backend is active, create a DTO to transform the data (service -> component).
        this._lathes.set(value);
      },
      error: () => {
        throw Error('Error connecting to the API!');
      },
    });
  }

  setLathe(id: string) {
    this._latheService.get(id).subscribe({
      next: (value) => {

        // Once the backend is active, create a DTO to transform the data (service -> component).
        if (value) {
          this._lathe.set(value);
        }
      },
      error: () => {
        throw Error('Error connecting to the API!');
      },
    });
  }
}
