import { useCallback, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { CANVAS_POSITION } from "./constants";
import { COMPONENT_CONSTANTS, POINT_LIGHT_COMPONENT_CONSTANTS } from "./component_constants";
import { Box } from "./box/box";
import Base from "./base";
import Camera from "./camera";

export default function ThreeD() {
  const group = useRef<THREE.Group>(null);
  const spinBlocked = useRef(false);

  const getNewCameraRotation = useCallback((rotation: string) => {
    if (!group.current) return 0;
    const currentRotation = THREE.MathUtils.radToDeg(group.current.rotation.y);
    const correctedRotation = Math.round(currentRotation / 90) * 90;
    return THREE.MathUtils.degToRad(
      rotation === "left" ? correctedRotation + 90 : correctedRotation - 90
    );
  }, []);

  const spin = useCallback((rotationChoice: string) => {
    if (!spinBlocked.current && group.current) {
      spinBlocked.current = true;

      rotationChoice === "left"
        ? gsap.to(group.current.rotation, {
            y: () => getNewCameraRotation("right"),
            duration: 0.8,
            ease: "power2",
          })
        : gsap.to(group.current.rotation, {
            y: () => getNewCameraRotation("left"),
            duration: 0.8,
            ease: "power2",
          });

      gsap
        .to(group.current.position, {
          y: () => (group.current ? group.current.position.y + 5 : 0),
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
        {POINT_LIGHT_COMPONENT_CONSTANTS.map((light) => (
          <pointLight {...light} />
        ))}
        <group ref={group}>
          {COMPONENT_CONSTANTS.map((box) => (
            <Box {...box} />
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
