import { injectable } from "inversify";
import { Camera, Scene } from "three";

@injectable()
export class Car {

    private _model: any
    private _scene: Scene
    private _camera: Camera
    private _controls: any

    constructor() {
    }

    init(model: any, scene: Scene, camera: Camera, controls: any) {
        this._model = model
        this._scene = scene
        this._camera = camera

        this._controls = controls
        // 把车模型加入到场景中
        this._scene.add(this._model.scene)
    }

}
