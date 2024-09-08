import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { injectable } from "inversify";

@injectable()
export class ModelManager {
    private _loader: GLTFLoader

    constructor() {
        this._loader = new GLTFLoader()
    }

    public loadModel(path: string, callback: (data: GLTF) => void) {
        this._loader.load(
            path,
            (data: GLTF) => {
                callback(data)
            },
            (event: ProgressEvent<EventTarget>) => {
                console.log('加载中', event);
            },
            (err: unknown) => {
                console.error(err);
                throw new Error('加载模型失败')
            }
        )

    }
}
