import { Pipe, PipeTransform } from '@angular/core';
import { ILatheBadgeName } from '../interfaces/lathe-badge-name';
import { TLatheFilter } from '../../features/pages/home/components/list-lathe/interfaces/filter-config';

@Pipe({
  name: 'getBadgeName',
})
export class GetBadgeNamePipe implements PipeTransform {
  transform(value: TLatheFilter): ILatheBadgeName {
    switch(value) {
      case 'danger':
        return 'Crítico'
      case 'warning':
        return 'Atençao'
      case 'success':
        return 'Operacional'
      case 'maintenance':
        return 'Manutençao'
      case 'all':
      default:
        return 'Operacional'   
    }
  }
}
