import { Camera, Scene, Renderer } from "three";
import { IRender } from "@/types/render.ts";

export abstract class AbstractRender implements IRender {
    abstract scene: Scene
    abstract camera: Camera
    abstract renderer: Renderer

    public abstract renderLoop(): void
}
