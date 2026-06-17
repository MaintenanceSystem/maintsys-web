import { Pipe, PipeTransform } from '@angular/core';
import { TLatheFilter } from '../../features/pages/home/components/list-lathe/interfaces/filter-config';

@Pipe({
  name: 'getBadgeIcon',
})
export class GetBadgeIconPipe implements PipeTransform {
  transform(value: TLatheFilter): string {
    switch(value) {
      case 'danger':
        return 'bi bi-activity'
      case 'warning':
        return 'bi bi-exclamation-triangle'
      case 'success':
        return 'bi bi-check-circle'
      case 'maintenance':
        return 'bi bi-tools'
      case 'all':
      default:
        return 'bi bi-activity'   
    }
  }
}
