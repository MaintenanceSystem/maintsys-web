import { Component, computed, ElementRef, inject, OnDestroy, signal } from '@angular/core';
import { GetDotStatusPipe } from '../../../../../../../shared/pipe';
import { ModalService } from './services/modal-service';
import { ArcRotateCamera, Engine, HemisphericLight, Scene, SceneLoader, Tools, Vector3 } from '@babylonjs/core';

@Component({
  selector: 'app-modal',
  imports: [GetDotStatusPipe],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal implements OnDestroy {
  modalService = inject(ModalService);

  protected engine! : Engine;
  protected scene! : Scene;

  lathe = computed(() => this.modalService.modalConfig());

  testImagem = signal<string |null>(null);

  imageModel! : string;

  //TO-DO: Fazer com oque o service seja responsavel pelo controle de gerar a imagem!
  startEngine() {
    const elementCanva = window.document.createElement('canvas');
    const canva = elementCanva;
    if (!canva) {
      console.error("Not found Canvas");
      return;
    }

    this.engine = new Engine(canva, true);
    this.scene = new Scene(this.engine);

    const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), this.scene);
    camera.attachControl(canva, true);

    const light = new HemisphericLight('light', new Vector3(0, 1, 0), this.scene);

    const folderTest = 'desk-lathe/';
    const fileGltf = 'scene.gltf';

    SceneLoader.AppendAsync(folderTest, fileGltf, this.scene).then((result) => {
      console.log("Loaded model with success!", result);

      this.scene.executeWhenReady(async () => {
        this.scene.render();

        try {
          const fotoBase64 = await Tools.CreateScreenshotAsync(this.engine, camera, { width: 800, height: 600 });
          this.testImagem.set(fotoBase64)
          this.imageModel = fotoBase64;
          console.log("Generate Model image with success!");
        } catch (error) {
          console.error("Error in generating model image:", error);
        }
      });
    }).catch(err => console.error("Error in importing file.gltf:", err));

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  ngOnDestroy(): void {
    if (this.engine) this.engine.dispose();
    if (this.scene) this.scene.dispose();
  }
}
