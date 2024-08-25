import { PerspectiveCamera, Scene, WebGLRenderer, AxesHelper } from 'three'
import { injectable } from "inversify";
import { AbstractRender } from "@/entity/render/AbstractRender.ts";
import { OrbitControls } from "three/addons";

@injectable()
export class CarRender implements AbstractRender {

    private _scene: Scene

    private _camera: PerspectiveCamera

    private _renderer: WebGLRenderer

    private _controls: any

    constructor() {
        this._scene = new Scene()
        this._camera = new PerspectiveCamera()
        this._renderer = new WebGLRenderer({ antialias: true })
    }

    public get scene(): Scene {
        return this._scene
    }

    public get camera(): PerspectiveCamera {
        return this._camera
    }

    public get renderer(): WebGLRenderer {
        return this._renderer
    }

    public get controls(): any {
        return this._controls
    }

    public renderLoop = () => {
        // 渲染
        this._renderer.render(this._scene, this._camera)
        this.controls.update()
        requestAnimationFrame(this.renderLoop)
    }

    public createControls() {
        // 创建轨道控制器
        this._controls = new OrbitControls(this._camera, this.renderer.domElement)
    }

    public createHelper() {
        // 创建辅助线
        const axesHelper = new AxesHelper(5)
        this._scene.add(axesHelper)
    }
}

