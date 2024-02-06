import { useScene } from "@/composable";
import { defineComponent, onMounted, ref } from "vue";
import $style from "./WebglContainer.module.scss";

export const WebglContainer = defineComponent({
  name: "WebglContainer",
  setup() {
    const webglContainer = ref();
    const {
      sceneState,
      actions: { initScene, renderBox, animate },
    } = useScene();

    const init = () => {
      initScene({
        fov: 75,
        width: webglContainer.value.clientWidth,
        height: webglContainer.value.clientHeight,
        aspect:
          webglContainer.value.clientWidth / webglContainer.value.clientHeight,
        near: 0.1,
        far: 1000,
      });
      if (sceneState.renderer) {
        webglContainer.value.appendChild(sceneState.renderer.domElement);
      }
      renderBox();
      if (sceneState.camera) {
        sceneState.camera.position.z = 5;
      }
      animate();
    };

    onMounted(init);

    return { webglContainer };
  },
  render() {
    return <div ref="webglContainer" class={$style.container}></div>;
  },
});
