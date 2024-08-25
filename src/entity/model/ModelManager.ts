import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { injectable } from "inversify";

@injectable()
export class ModelManager {
    private _loader: any

    constructor() {
        this._loader = new GLTFLoader()
    }

    public loadModel(path: string, callback: (e: any) => void) {
        this._loader.load(
            path,
            (e: any) => {
                callback(e)
            },
            (e: any) => {
                console.log('加载中', e);
            },
            (e: any) => {
                throw new Error(e)
            }
        )

    }
}
