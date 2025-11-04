import { Vector2Tuple, Vector3Tuple } from "three";

export const CANVAS_CAMERA_VALUES = { position: [0, 0, 10] } as const;

export const FLOAT_FLOATING_RANGE = [-0.1, 0.1] as Vector2Tuple;

export const FLOAT_POSITION = [0, -3, 3] as Vector3Tuple;

export const POINT_LIGHT_POSITIONS = {
  light1: [-5, 0, 10] as Vector3Tuple,
  light2: [-5, 0, 10] as Vector3Tuple,
};
