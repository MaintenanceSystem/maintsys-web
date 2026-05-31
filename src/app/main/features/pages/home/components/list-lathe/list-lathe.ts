import { Component, inject } from '@angular/core';
import { HomeService } from '../../service/home-service';
import { GetDotStatusPipe,GetBadgeNamePipe,GetBadgeStatusPipe,GetBadgeIconPipe } from '../../../../../shared/pipe';

@Component({
  selector: 'app-list-lathe',
  imports: [GetDotStatusPipe,GetBadgeNamePipe, GetBadgeStatusPipe,GetBadgeIconPipe],
  templateUrl: './list-lathe.html',
  styleUrl: './list-lathe.scss',
})
export class ListLathe {
  homeService = inject(HomeService);
}
