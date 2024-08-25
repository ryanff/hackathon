import { DirectionalLight, Scene } from "three";
import { injectable } from "inversify";

@injectable()
export class Light {
    // 平行光的坐标位置
    private _dirPosList: [number, number, number][] = [
        [0, 5, 10],
        [-10, 5, 0],
        [0, 5, -10],
        [10, 5, 0]
    ]

    private _scene: Scene

    init(scene: Scene) {
        this._scene = scene
        //遍历所有位置
        this._dirPosList.forEach(positionArr => {
            //创建平行光
            const directionalLight = new DirectionalLight(0xffffff, 0.5)
            //设置位置
            directionalLight.position.set(...positionArr)
            this._scene.add(directionalLight)
        })
    }

}
