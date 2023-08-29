/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMemo, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import mongo from '../assets/mongo.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import redux from '../assets/redux.png';
import Camera from '../components/Camera';
import { useSpring, animated } from '@react-spring/three';
import { useDrag } from 'react-use-gesture';

export default function ThreeD() {
  // const [rotation, setRotation] = useState(1);
  const [leftToggle, setLeftToggle] = useState(false);
  const [rightToggle, setRightToggle] = useState(false);

  return (
    <div className='relative w-screen h-screen mt-2'>
      <Canvas shadows>
        <Camera leftToggle={leftToggle} rightToggle={rightToggle} />
        <ambientLight />
        <Box imageLink={mongo} position={[100, 0, 0]} item='mongo' />
        <Box imageLink={react} position={[0, 0, 100]} item='react' />
        <Box imageLink={node} position={[-100, 0, 0]} item='node' />
        <Box imageLink={redux} position={[0, 0, -100]} item='redux' />
      </Canvas>
      <button
        className='absolute left-2 top-1/2'
        onClick={() => setLeftToggle((prev) => !prev)}>
        Left
      </button>
      <button
        className='absolute right-2 top-1/2'
        onClick={() => setRightToggle((prev) => !prev)}>
        Right
      </button>
    </div>
  );
}

interface BoxType {
  imageLink: string;
  position: [number, number, number];
  responsiveness?: number;
  item: string;
}

function Box({ imageLink, position, responsiveness = 5, item }: BoxType) {
  const colorMap = useTexture(imageLink);
  const { size } = useThree();
  const euler = useMemo(() => new THREE.Euler(), []);
  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
  }));
  console.log(spring);
  const bind = useDrag(({ delta: [dx, dy] }) => {
    euler.y += (dx / size.width) * responsiveness;
    if (item === 'redux') {
      euler.x += (dy / size.width) * responsiveness;
    } else if (item === 'node') {
      euler.z += (-dy / size.width) * responsiveness;
    } else if (item === 'react') {
      euler.x += (-dy / size.width) * responsiveness;
    } else if (item === 'mongo') {
      euler.z += (dy / size.width) * responsiveness;
    }
    //@ts-ignore
    set({ rotation: euler.toArray().slice(0, 3) });
  });
  console.log(spring.rotation);
  return (
    //@ts-ignore
    <animated.mesh visible position={position} {...bind()} {...spring}>
      <boxGeometry args={[16, 9, 16]} />
      <meshStandardMaterial map={colorMap} />
    </animated.mesh>
  );
}
