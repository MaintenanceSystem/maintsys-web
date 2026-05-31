import { computed, inject, Injectable, signal } from '@angular/core';
import { LatheStorageService } from '../../../../shared/services/lathe/lathe-storage-service';
import { TLatheFilter } from '../components/list-lathe/interfaces/filter-config';
import { ILatheConfig } from '../../../../shared/interfaces/lathe/lathe-config';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  latheStorageService = inject(LatheStorageService);

  private _filterByStatus = signal<TLatheFilter>('all');
  private _filterBySearch = signal<string>('');

  getLathesFiltered = computed(() => {
    const filter = this._filterByStatus();
    const search = this._filterBySearch();
    const lathes = this.latheStorageService.getLathes();

    if (filter == 'all') {
      return lathes;
    }

    return lathes.filter((data) => data.status == filter && (data.name.includes(search) || data.model.includes(search)));
  });


  setFilter(nextFilter : TLatheFilter) {
    this._filterByStatus.set(nextFilter);
  }

  get allLathes() : ILatheConfig[] {
    return this.latheStorageService.getLathes()
  }

  get actualFilter() : TLatheFilter {
    return this._filterByStatus()
  }
}
