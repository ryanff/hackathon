import { injectable } from "inversify";
import { Scene } from "three";

@injectable()
export class Car {

    private _model: any
    private _scene: Scene | null
    // private _camera: Camera | null
    // private _controls: any

    constructor() {
        this._model = null
        this._scene = null
        // this._camera = null
        // this._controls = null
    }

    init(model: any, scene: Scene) {
        this._model = model
        this._scene = scene
        // this._camera = camera

        // this._controls = controls
        // 把车模型加入到场景中
        this._scene.add(this._model.scene)
    }

}
