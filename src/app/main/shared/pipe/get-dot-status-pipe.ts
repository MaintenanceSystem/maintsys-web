import { Pipe, PipeTransform } from '@angular/core';
import { TLatheFilter } from '../../features/pages/home/components/list-lathe/interfaces/filter-config';

@Pipe({
  name: 'getDotStatus',
})
export class GetDotStatusPipe implements PipeTransform {
  transform(value: TLatheFilter): string{
    return value != 'danger' ? `status-dot dot-${value}` : `status-dot dot-${value} pulse-danger`
  }
}
