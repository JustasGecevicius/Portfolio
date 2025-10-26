import { PerspectiveCamera } from "@react-three/drei";
import { memo } from "react";

function Camera() {
  return <PerspectiveCamera makeDefault position={[0, 10, 0]} />;
}

export default memo(Camera);
