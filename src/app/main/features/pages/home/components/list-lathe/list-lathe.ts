import { Component, inject } from '@angular/core';
import { HomeService } from '../../service/home-service';
import { GetDotStatusPipe,GetBadgeNamePipe,GetBadgeStatusPipe,GetBadgeIconPipe } from '../../../../../shared/pipe';
import { ILatheConfig } from '../../../../../shared/interfaces/lathe/lathe-config';
import { ModalService } from './components/modal/services/modal-service';
import { Modal } from './components/modal/modal';

@Component({
  selector: 'app-list-lathe',
  imports: [GetDotStatusPipe,GetBadgeNamePipe, GetBadgeStatusPipe,GetBadgeIconPipe, Modal],
  templateUrl: './list-lathe.html',
  styleUrl: './list-lathe.scss',
})
export class ListLathe {
  modalService = inject(ModalService)
  homeService = inject(HomeService);

  onClick(lathe : ILatheConfig) {
    this.modalService.setModalConfig(lathe.id);
  }
}
