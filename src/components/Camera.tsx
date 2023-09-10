import { PerspectiveCamera } from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

interface CameraType {
  leftToggle: boolean;
  rightToggle: boolean;
}

export default function Camera({ leftToggle, rightToggle }: CameraType) {
  const { camera } = useThree();

  const getNewCameraRotation = (rotation: string) => {
    const currentRotation = THREE.MathUtils.radToDeg(camera.rotation.y);
    console.log(currentRotation);
    const correctedRotation = Math.round(currentRotation / 90) * 90;
    console.log(correctedRotation);
    return THREE.MathUtils.degToRad(
      rotation === 'left' ? correctedRotation + 90 : correctedRotation - 90
    );
  };

  const spinLeft = () => {
    gsap.to(camera.rotation, {
      y: () => getNewCameraRotation('left'),
      duration: 1,
      ease: 'back',
    });
  };

  const spinRight = () => {
    gsap.to(camera.rotation, {
      y: () => getNewCameraRotation('right'),
      duration: 1,
      ease: 'back',
    });
  };

  useEffect(() => {
    spinLeft();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftToggle]);

  useEffect(() => {
    spinRight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rightToggle]);

  return <PerspectiveCamera makeDefault position={[0, 5, 0]} />;
}
