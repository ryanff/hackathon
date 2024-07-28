import { Scene } from "@/entity/Scene/Scene";
import { PerspectiveCamera } from "@/entity/Camera/PerspectiveCamera";
import { BoxGeometry, Camera, Mesh, MeshBasicMaterial } from "three";
import { CameraParams } from "@/types";
import { Render } from "@/entity/Render/Render";

interface SceneState {
  scene: Scene | null;
  camera: Camera | null;
  renderer: Render | null;
}

export function useScene() {
  const sceneState: SceneState = {
    scene: null,
    camera: null,
    renderer: null,
  };

  /**
   * 初始化场景
   * @param params
   */
  const initScene = (params: CameraParams) => {
    console.log("params", params);
    sceneState.scene = new Scene();
    sceneState.camera = new PerspectiveCamera(params);
    sceneState.renderer = new Render();

    sceneState.renderer.setSize(params.width, params.height);
  };

  const renderBox = () => {
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    sceneState.scene?.add(cube);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    sceneState.renderer?.render(
      sceneState.scene as Scene,
      sceneState.camera as Camera
    );
  };

  const actions = {
    initScene,
    renderBox,
    animate,
  };

  return {
    sceneState,
    actions,
  };
}
