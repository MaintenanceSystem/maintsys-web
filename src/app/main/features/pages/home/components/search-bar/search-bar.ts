import { Component, computed, effect, inject, signal } from '@angular/core';
import { HomeService } from '../../service/home-service';
import { ISearchBarConfig } from './interfaces/search-bar-config';
import { GetDotStatusPipe } from '../../../../../shared/pipe';
import { InputForm, IInputFormConfig } from '../../../../../shared/components/input-form';
import { ISearchFilterModel } from './interfaces/search-filter-model';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-search-bar',
  imports: [GetDotStatusPipe, InputForm],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  homeService = inject(HomeService);

  model = signal<ISearchFilterModel>({
    search: '',
  });

  searchForm = form(this.model);

  specialInputConfig: IInputFormConfig = {
    formData: this.searchForm.search,
    hasSpecialConfig: true,
    type: 'input',
    typeInput: 'text',
    inputConfig: {
      placeholder: 'Buscar torno...',
      classSpecial: 'filter-search__input',
    },
  };

  filterOptions: ISearchBarConfig[] = [
    {
      name: 'Todos',
      filterStatus: 'all',
    },
    {
      name: 'Operacional',
      haveDot: true,
      filterStatus: 'success',
    },
    {
      name: 'Atençao',
      haveDot: true,
      filterStatus: 'warning',
    },
    {
      name: 'Crítico',
      haveDot: true,
      filterStatus: 'danger',
    },
    {
      name: 'Manutençao',
      haveDot: true,
      filterStatus: 'maintenance',
    },
  ];

  constructor() {
    effect(() => {
      const search = this.model().search;
      this.homeService.searchFilter(search);
    });
  }
}
