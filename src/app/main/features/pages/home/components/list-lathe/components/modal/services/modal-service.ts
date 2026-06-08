import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { IUniqueLatheConfig } from '../../../../../../../../shared/interfaces/lathe/unique-lathe-config';
import { LatheStorageService } from '../../../../../../../../shared/services/lathe/lathe-storage-service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly latheStorageService = inject(LatheStorageService);

  modalConfig = computed(() => this._modalConfig());

  private _modalConfig = signal<IUniqueLatheConfig | null>(null);

  private _showModal = signal<boolean>(false);

  private syncShowModal = effect(() => {
    this._showModal.set(this._modalConfig() != null);
  })

  get showModal(): boolean {
    return this._showModal();
  }

  closeModal() {
    this._modalConfig.set(null);
    this._showModal.set(false);
  }

  setModalConfig(id: string) {

    this.latheStorageService.setLathe(id);

    const lathe = this.latheStorageService.getLathe();


    if (lathe) this._modalConfig.set(lathe);
  }
}
