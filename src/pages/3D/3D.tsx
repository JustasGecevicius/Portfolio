import { useCallback, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { CANVAS_POSITION } from "./constants";
import { componentConstants, pointLightComponentConstants } from "./component_constants";
import { Camera } from "./camera";
import { Base } from "./base";
import { Box } from "./box";

export default function ThreeD() {
  const group = useRef(null);
  const spinBlocked = useRef(false);

  const spin = (rotationChoice: string) =>
    useCallback(() => {
      if (!spinBlocked.current) {
        spinBlocked.current = true;
        const getNewCameraRotation = (rotation: string) => {
          //@ts-ignore
          const currentRotation = THREE.MathUtils.radToDeg(group.current.rotation.y);
          const correctedRotation = Math.round(currentRotation / 90) * 90;
          return THREE.MathUtils.degToRad(
            rotation === "left" ? correctedRotation + 90 : correctedRotation - 90
          );
        };

        rotationChoice === "left"
          ? //@ts-ignore
            gsap.to(group.current.rotation, {
              y: () => getNewCameraRotation("right"),
              duration: 0.8,
              ease: "power2",
            })
          : //@ts-ignore
            gsap.to(group.current.rotation, {
              y: () => getNewCameraRotation("left"),
              duration: 0.8,
              ease: "power2",
            });

        gsap
          //@ts-ignore
          .to(group.current.position, {
            //@ts-ignore
            y: () => group.current.position.y + 5,
            duration: 0.4,
            yoyoEase: true,
            repeat: 1,
            ease: "bounce.out",
          })
          .then(() => {
            spinBlocked.current = false;
          });
      }
    }, []);

  const handleLeftSpin = useCallback(() => spin("left"), [spin]);
  const handleRightSpin = useCallback(() => spin("right"), [spin]);

  return (
    <div className="relative w-screen h-[70vh] px-2">
      <Canvas shadows={"soft"} camera={{ position: CANVAS_POSITION }} className="w-full px-5">
        {pointLightComponentConstants.map(({ position, intensity, color }, index) => (
          <pointLight key={index} position={position} intensity={intensity} color={color} />
        ))}
        <group ref={group}>
          {componentConstants.map(({ position, item, rotation, text, color }) => (
            <Box position={position} item={item} rotation={rotation} text={text} color={color} />
          ))}
        </group>
        <Base />
        <Camera />
      </Canvas>
      <button className="absolute left-2 top-1/2 md:text-xl" onClick={handleLeftSpin}>
        Left
      </button>
      <button className="absolute right-2 top-1/2 md:text-xl" onClick={handleRightSpin}>
        Right
      </button>
    </div>
  );
}
