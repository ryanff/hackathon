// import { Scene } from "@/entity/Scene/Scene";
// import { PerspectiveCamera } from "@/entity/Camera/PerspectiveCamera";
// import { BoxGeometry, Camera, Mesh, MeshBasicMaterial, WebGLRenderer } from "three";
// import { CameraParams } from "@/types";
//
// interface SceneState {
//     scene: Scene | null;
//     camera: Camera | null;
//     renderer: WebGLRenderer | null;
// }
//
// export function useScene() {
//     const sceneState: SceneState = {
//         scene: null,
//         camera: null,
//         renderer: null,
//     };
//
//     /**
//      * 初始化场景
//      * @param params
//      */
//     const initScene = (params: CameraParams) => {
//         sceneState.scene = new Scene();
//         sceneState.camera = new PerspectiveCamera(params);
//         //开启反锯齿
//         sceneState.renderer = new WebGLRenderer({ antialias: true });
//         // 开启渲染器加载阴影
//         sceneState.renderer.shadowMap.enabled = true
//         // 设置渲染器的宽高
//         sceneState.renderer.setSize(params.width, params.height);
//     };
//
//     const renderBox = () => {
//         const geometry = new BoxGeometry(1, 1, 1);
//         const material = new MeshBasicMaterial({ color: 0x00ff00 });
//         const cube = new Mesh(geometry, material);
//         sceneState.scene?.add(cube);
//     };
//
//     const animate = () => {
//         requestAnimationFrame(animate);
//         sceneState.renderer?.render(
//             sceneState.scene as Scene,
//             sceneState.camera as Camera
//         );
//     };
//
//     const actions = {
//         initScene,
//         renderBox,
//         animate,
//     };
//
//     return {
//         sceneState,
//         actions,
//     };
// }
