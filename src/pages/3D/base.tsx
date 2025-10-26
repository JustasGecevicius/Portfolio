import { memo } from "react";
import { BASE_MESH_POSITION, BOX_GEOMETRY_ARGS } from "./constants";

function BaseComponent() {
  return (
    <mesh visible position={BASE_MESH_POSITION} receiveShadow={true} castShadow={true}>
      <boxGeometry args={BOX_GEOMETRY_ARGS} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}

export default memo(BaseComponent);
