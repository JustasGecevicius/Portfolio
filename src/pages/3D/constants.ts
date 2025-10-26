import * as THREE from "three";

export const ROTATION_VALUES = {
  ThreeJS: THREE.MathUtils.degToRad(-90),
  ReactJS: THREE.MathUtils.degToRad(180),
  NodeJS: THREE.MathUtils.degToRad(90),
  Redux: 0,
};

export const ROTATION_VALUES_ARRAYS = {
  ThreeJS: [0, ROTATION_VALUES.ThreeJS, 0] as [number, number, number],
  ReactJS: [0, ROTATION_VALUES.ReactJS, 0] as [number, number, number],
  NodeJS: [0, ROTATION_VALUES.NodeJS, 0] as [number, number, number],
  Redux: [0, ROTATION_VALUES.Redux, 0] as [number, number, number],
};

export const POSITION_VALUES_ARRAYS = {
  ThreeJS: [70, 10, 0] as [number, number, number],
  ReactJS: [0, 9.7, 70] as [number, number, number],
  NodeJS: [-70, 10, 0] as [number, number, number],
  Redux: [0, 9.5, -70] as [number, number, number],
};

export const LIGHT_POSITIONS_VALUES_ARRAYS = {
  light1: [-20, 10, -60] as [number, number, number],
  light2: [20, 10, -60] as [number, number, number],
};

export const CANVAS_POSITION = [0, 0, 0] as [number, number, number];

export const BASE_MESH_POSITION = [0, 2, -70] as [number, number, number];

export const BOX_GEOMETRY_ARGS = [17, 1, 17] as [number, number, number];
