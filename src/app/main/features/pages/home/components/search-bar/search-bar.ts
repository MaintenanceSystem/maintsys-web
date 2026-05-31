import { Component, inject } from '@angular/core';
import { HomeService } from '../../service/home-service';
import { ISearchBarConfig } from './interface/search-bar-config';
import { GetDotStatusPipe } from '../../../../../shared/pipe';

@Component({
  selector: 'app-search-bar',
  imports: [GetDotStatusPipe],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  homeService = inject(HomeService);

  filterOptions : ISearchBarConfig[] = [
    {
      name : 'Todos',
      filterStatus : 'all'
    },
    {
      name : 'Operacional',
      haveDot : true,
      filterStatus : 'success'
    },
    {
      name : 'Atençao',
      haveDot : true,
      filterStatus : 'warning'
    },
    {
      name : 'Crítico',
      haveDot : true,
      filterStatus : 'danger'
    },
    {
      name : 'Manutençao',
      haveDot : true,
      filterStatus : 'maintenance'
    }
  ]
}
