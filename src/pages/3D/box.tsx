import { useSpring, animated } from "@react-spring/three";
import { Center, Float, Text3D, useGLTF, Clone } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useDrag } from "react-use-gesture";

export function Box({ position, responsiveness = 5, item, rotation, text, color }: BoxType) {
  const { size } = useThree();
  const euler = useMemo(() => new THREE.Euler(), []);
  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
  }));

  const [localPosition, setLocalPosition] = useState([0, 0, 0]);
  const [clicked, setClicked] = useState(false);
  const [textLocalPosition, setTextLocalPosition] = useState([0, 10, 0]);
  useEffect(() => {
    position && setLocalPosition(position);
  }, [position]);

  useEffect(() => {
    clicked
      ? setLocalPosition([position[0], position[1] + 5, position[2]])
      : setLocalPosition(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

  useEffect(() => {
    const newTextPosition = [...position];
    newTextPosition[1] = 20;
    setTextLocalPosition(newTextPosition);
  }, [position]);

  const debouncedClick = debounce(() => setClicked((prev) => !prev), 300);
  interface ModelPathsType {
    [key: string]: string;
  }

  const modelPaths: ModelPathsType = {
    react: "./models/React.glb",
    node: "./models/Node.glb",
    redux: "./models/Redux.glb",
    three: "./models/Three.glb",
  };

  const { scene } = useGLTF(modelPaths[item as keyof ModelPathsType]);

  const bind = useDrag(({ delta: [dx, dy] }) => {
    if (dx === 0 && dy === 0) {
      debouncedClick();
    }
    euler.y += (dx / size.width) * responsiveness;
    if (item === "redux") {
      euler.x += (dy / size.width) * responsiveness;
    } else if (item === "node") {
      euler.z += (-dy / size.width) * responsiveness;
    } else if (item === "react") {
      euler.x += (-dy / size.width) * responsiveness;
    } else if (item === "mongo") {
      euler.z += (dy / size.width) * responsiveness;
    }
    //@ts-ignore
    clicked ? set({ rotation: euler.toArray().slice(0, 3) }) : null;
  });

  return (
    <>
      <Float
        floatIntensity={50}
        speed={5}
        floatingRange={[-0.005, 0.005]}
        rotationIntensity={0.05}
        castShadow
        receiveShadow
      >
        <Center
          top
          center
          //@ts-ignore
          position={textLocalPosition}
          rotation={rotation}
          castShadow
          receiveShadow
        >
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
        //@ts-ignore
        position={localPosition}
        {...bind()}
        {...spring}
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
  position: [number, number, number];
  rotation: [number, number, number];
  responsiveness?: number;
  item: string;
  text: string;
  color: string;
}
