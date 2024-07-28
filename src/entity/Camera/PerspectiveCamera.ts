import { PerspectiveCamera as PerspectiveCameraThree } from "three";
import { CameraParams } from "@/types";

export class PerspectiveCamera extends PerspectiveCameraThree {
  constructor(params: CameraParams) {
    const { fov, aspect, near, far } = params;
    super(fov, aspect, near, far);
  }
}
