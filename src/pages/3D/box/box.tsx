import { animated } from "@react-spring/three";
import { Center, Float, Text3D, useGLTF, Clone } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Vector3Tuple } from "three";
import { FLOAT_FLOATING_RANGE, MODEL_PATHS } from "./constants";

export function Box({ position, item, rotation, text, color }: BoxType) {
  const { scene } = useGLTF(MODEL_PATHS[item as keyof typeof MODEL_PATHS]);
  const [localPosition, setLocalPosition] = useState<Vector3Tuple>([0, 0, 0]);
  const [textLocalPosition, setTextLocalPosition] = useState<Vector3Tuple>([0, 10, 0]);

  useEffect(() => {
    position && setLocalPosition(position);
  }, [position]);

  useEffect(() => {
    const newTextPosition: Vector3Tuple = [position[0], 20, position[2]];
    setTextLocalPosition(newTextPosition);
  }, [position]);

  return (
    <>
      <Float
        floatIntensity={50}
        speed={5}
        floatingRange={FLOAT_FLOATING_RANGE}
        rotationIntensity={0.05}
        castShadow
        receiveShadow
      >
        <Center top position={textLocalPosition} rotation={rotation} castShadow receiveShadow>
          <Text3D
            font={"/Poppins Medium_Regular.json"}
            size={5}
            bevelEnabled
            bevelSize={0.2}
            bevelSegments={5}
            height={2}
            receiveShadow
            castShadow
          >
            {text}
            <meshStandardMaterial color={color || "white"} clipShadows />
          </Text3D>
        </Center>
      </Float>
      <animated.mesh
        visible
        position={localPosition}
        receiveShadow={true}
        castShadow={true}
        scale={1.5}
      >
        <Clone object={scene} scale={5} castShadow receiveShadow />
      </animated.mesh>
    </>
  );
}

interface BoxType {
  position: Vector3Tuple;
  rotation: Vector3Tuple;
  responsiveness?: number;
  item: string;
  text: string;
  color: string;
}
