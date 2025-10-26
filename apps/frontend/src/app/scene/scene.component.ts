import { Component, ElementRef, AfterViewInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements AfterViewInit, OnChanges {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
  @Input() items: any[] = [];

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private loader = new THREE.TextureLoader();
  private planes: THREE.Mesh[] = [];

  ngAfterViewInit(): void {
    this.initScene();
    this.animate();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'] && this.scene) {
      this.updateItems();
    }
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.camera.position.set(0, 1.5, 6);

    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    this.scene.add(light);

    window.addEventListener('resize', () => this.onWindowResize());
  }

  private updateItems() {
    // remove old planes
    this.planes.forEach(p => this.scene.remove(p));
    this.planes = [];

    const gap = 1.6;
    this.items.forEach((item, idx) => {
      const geometry = new THREE.PlaneGeometry(1.6, 1);
      const material = new THREE.MeshStandardMaterial({ color: 0x888888 });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set((idx - (this.items.length - 1) / 2) * gap, 0, -idx * 0.5);

      if (item.imageUrl) {
        this.loader.load(item.imageUrl, (tex) => {
          (mesh.material as THREE.MeshStandardMaterial).map = tex;
          (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
        }, undefined, () => {
          // ignore texture load errors
        });
      }

      this.scene.add(mesh);
      this.planes.push(mesh);
    });
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
