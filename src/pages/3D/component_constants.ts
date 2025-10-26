import {
  LIGHT_POSITIONS_VALUES_ARRAYS,
  POSITION_VALUES_ARRAYS,
  ROTATION_VALUES_ARRAYS,
} from "./constants";

export const COMPONENT_CONSTANTS = [
  {
    position: POSITION_VALUES_ARRAYS.ThreeJS,
    item: "three",
    rotation: ROTATION_VALUES_ARRAYS.ThreeJS,
    text: "ThreeJS",
    color: "white",
    key: Math.random(),
  },
  {
    position: POSITION_VALUES_ARRAYS.ReactJS,
    item: "react",
    rotation: ROTATION_VALUES_ARRAYS.ReactJS,
    text: "ReactJS",
    color: "#61DBFB",
    key: Math.random(),
  },
  {
    position: POSITION_VALUES_ARRAYS.NodeJS,
    item: "node",
    rotation: ROTATION_VALUES_ARRAYS.NodeJS,
    text: "NodeJS",
    color: "#68A063",
    key: Math.random(),
  },
  {
    position: POSITION_VALUES_ARRAYS.Redux,
    item: "redux",
    rotation: ROTATION_VALUES_ARRAYS.Redux,
    text: "Redux",
    color: "#764abc",
    key: Math.random(),
  },
];

export const POINT_LIGHT_COMPONENT_CONSTANTS = [
  {
    position: LIGHT_POSITIONS_VALUES_ARRAYS.light1,
    intensity: 1500,
    color: "#ffffff",
    key: Math.random(),
  },
  {
    position: LIGHT_POSITIONS_VALUES_ARRAYS.light2,
    intensity: 1500,
    color: "#ffffff",
    key: Math.random(),
  },
];
