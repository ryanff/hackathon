import { Camera, Renderer, Scene } from "three";

export interface IRender {
    scene: Scene
    camera: Camera
    renderer: Renderer

    renderLoop(): void
}
