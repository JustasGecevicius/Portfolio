import { PerspectiveCamera } from "@react-three/drei";

export function Camera() {
  return <PerspectiveCamera makeDefault position={[0, 10, 0]} />;
}
