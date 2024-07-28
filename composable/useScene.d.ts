import { Scene } from '../entity/Scene/Scene';
import { Camera } from 'three';
import { CameraParams } from '../types';
import { Render } from '../entity/Render/Render';

interface SceneState {
    scene: Scene | null;
    camera: Camera | null;
    renderer: Render | null;
}
export declare function useScene(): {
    sceneState: SceneState;
    actions: {
        initScene: (params: CameraParams) => void;
        renderBox: () => void;
        animate: () => void;
    };
};
export {};
