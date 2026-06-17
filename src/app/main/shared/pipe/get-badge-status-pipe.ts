import { Pipe, PipeTransform } from '@angular/core';
import { TLatheFilter } from '../../features/pages/home/components/list-lathe/interfaces/filter-config';

@Pipe({
  name: 'getBadgeStatus',
})
export class GetBadgeStatusPipe implements PipeTransform {
  transform(value: TLatheFilter): string {
    return `status-badge badge-${value}`;
  }
}
