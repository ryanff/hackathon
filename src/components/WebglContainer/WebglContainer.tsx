import { defineComponent, onMounted, ref } from "vue";
import $style from "./WebglContainer.module.scss";
import { TYPES } from "@/constants";
import { carContainer } from "@/inversify.config.ts";
import { CarRender } from "@/entity/render/CarRender.ts";
import { useResizeObserver } from "@vueuse/core";
// import { ModelManager } from "@/entity/model/ModelManager.ts";
// import { Car } from "@/entity/model/Car.ts";
import { Light } from "@/entity/model/Light.ts";
// import { STATIC_URI } from "@/config/envVars";

export const WebglContainer = defineComponent({
  name: "WebglContainer",
  setup() {
    const webglContainer = ref();

    const carRender = carContainer.get<CarRender>(TYPES.Render);
    // const modelManager = carContainer.get<ModelManager>(TYPES.ModelManager);
    // const car = carContainer.get<Car>(TYPES.Car);
    const light = carContainer.get<Light>(TYPES.Light);

    const init = () => {
      carRender.camera.fov = 75;
      carRender.camera.aspect =
        webglContainer.value.clientWidth / webglContainer.value.clientHeight;
      carRender.camera.near = 0.1;
      carRender.camera.far = 1000;
      carRender.camera.position.set(3, 1.5, 3);

      carRender.renderer.shadowMap.enabled = true;
      carRender.renderer.setSize(
        webglContainer.value.clientWidth,
        webglContainer.value.clientHeight
      );

      if (carRender.renderer) {
        webglContainer.value.appendChild(carRender.renderer.domElement);
      }
    };

    function onResize() {
      carRender.renderer.setSize(
        webglContainer.value.clientWidth,
        webglContainer.value.clientHeight
      );
      carRender.camera.aspect =
        webglContainer.value.clientWidth / webglContainer.value.clientHeight;
      carRender.camera.updateProjectionMatrix();
    }

    onMounted(() => {
      init();
      carRender.createHelper();
      carRender.createControls();
      useResizeObserver(window.document.body, onResize);
      carRender.renderLoop();

      // modelManager.loadModel(
      //   "/three/glb/911.glb",
      //   // `${STATIC_URI}/static/three/glb/911.glb`,
      //   (model) => {
      //     car.init(model, carRender.scene);
      //   }
      // );
      light.init(carRender.scene);
    });

    return { webglContainer };
  },
  render() {
    return <div ref="webglContainer" class={$style.container}></div>;
  },
});
