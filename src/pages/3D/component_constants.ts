import {
  LIGHT_POSITIONS_VALUES_ARRAYS,
  POSITION_VALUES_ARRAYS,
  ROTATION_VALUES_ARRAYS,
} from "./constants";

export const componentConstants = [
  {
    position: POSITION_VALUES_ARRAYS.ThreeJS,
    item: "three",
    rotation: ROTATION_VALUES_ARRAYS.ThreeJS,
    text: "ThreeJS",
    color: "white",
  },
  {
    position: POSITION_VALUES_ARRAYS.ReactJS,
    item: "react",
    rotation: ROTATION_VALUES_ARRAYS.ReactJS,
    text: "ReactJS",
    color: "#61DBFB",
  },
  {
    position: POSITION_VALUES_ARRAYS.NodeJS,
    item: "node",
    rotation: ROTATION_VALUES_ARRAYS.NodeJS,
    text: "NodeJS",
    color: "#68A063",
  },
  {
    position: POSITION_VALUES_ARRAYS.Redux,
    item: "redux",
    rotation: ROTATION_VALUES_ARRAYS.Redux,
    text: "Redux",
    color: "#764abc",
  },
];

export const pointLightComponentConstants = [
  {
    position: LIGHT_POSITIONS_VALUES_ARRAYS.light1,
    intensity: 1500,
    color: "#ffffff",
  },
  {
    position: LIGHT_POSITIONS_VALUES_ARRAYS.light2,
    intensity: 1500,
    color: "#ffffff",
  },
];
