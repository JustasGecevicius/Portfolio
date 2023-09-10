/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  Center,
  Clone,
  Float,
  PerspectiveCamera,
  Text3D,
  useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';
import { useDrag } from 'react-use-gesture';
import gsap from 'gsap';
import { debounce } from 'lodash';

export default function ThreeD() {
  const group = useRef(null);
  const spinBlocked = useRef(false);

  const spin = (rotationChoice: string) => {
    if (!spinBlocked.current) {
      spinBlocked.current = true;
      const getNewCameraRotation = (rotation: string) => {
        //@ts-ignore
        const currentRotation = THREE.MathUtils.radToDeg(group.current.rotation.y);
        const correctedRotation = Math.round(currentRotation / 90) * 90;
        return THREE.MathUtils.degToRad(
          rotation === 'left' ? correctedRotation + 90 : correctedRotation - 90
        );
      };

      rotationChoice === 'left'
        ? //@ts-ignore
          gsap.to(group.current.rotation, {
            y: () => getNewCameraRotation('right'),
            duration: 0.8,
            ease: 'power2',
          })
        : //@ts-ignore
          gsap.to(group.current.rotation, {
            y: () => getNewCameraRotation('left'),
            duration: 0.8,
            ease: 'power2',
          });

      gsap
        //@ts-ignore
        .to(group.current.position, {
          //@ts-ignore
          y: () => group.current.position.y + 5,
          duration: 0.4,
          yoyoEase: true,
          repeat: 1,
          ease: 'bounce.out',
        })
        .then(() => {
          spinBlocked.current = false;
        });
    }
  };

  return (
    <div className='relative w-screen h-[70vh] px-2'>
      <Canvas shadows={'soft'} camera={{ position: [0, 0, 0] }} className='w-full px-5'>
        <pointLight position={[-20, 10, -60]} intensity={1500} color='#ffffff' />
        <pointLight position={[20, 10, -60]} intensity={1500} color='#ffffff' />
        <group ref={group}>
          <Box
            position={[70, 10, 0]}
            item='three'
            //@ts-ignore
            rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
            text={'ThreeJS'}
            color={'white'}
          />
          <Box
            position={[0, 9.7, 70]}
            item='react'
            //@ts-ignore
            rotation={[0, THREE.MathUtils.degToRad(180), 0]}
            text={'ReactJS'}
            color={'#61DBFB'}
          />
          <Box
            position={[-70, 10, 0]}
            item='node'
            //@ts-ignore
            rotation={[0, THREE.MathUtils.degToRad(90), 0]}
            text={'NodeJS'}
            color={'#68A063'}
          />
          <Box
            position={[0, 9.5, -70]}
            item='redux'
            //@ts-ignore
            rotation={[0, 0, 0]}
            text={'Redux'}
            color={'#764abc'}
          />
        </group>
        <Base></Base>
        <Camera></Camera>
      </Canvas>
      <button className='absolute left-2 top-1/2 md:text-xl' onClick={() => spin('left')}>
        Left
      </button>
      <button
        className='absolute right-2 top-1/2 md:text-xl'
        onClick={() => spin('right')}>
        Right
      </button>
    </div>
  );
}

function Camera() {
  return <PerspectiveCamera makeDefault position={[0, 10, 0]} />;
}

function Base() {
  return (
    <mesh visible position={[0, 2, -70]} receiveShadow={true} castShadow={true}>
      <boxGeometry args={[17, 1, 17]} />
      <meshStandardMaterial color={'white'} />
    </mesh>
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

function Box({ position, responsiveness = 5, item, rotation, text, color }: BoxType) {
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
    react: './models/React.glb',
    node: './models/Node.glb',
    redux: './models/Redux.glb',
    three: './models/Three.glb',
  };

  const { scene } = useGLTF(modelPaths[item as keyof ModelPathsType]);

  const bind = useDrag(({ delta: [dx, dy] }) => {
    if (dx === 0 && dy === 0) {
      debouncedClick();
    }
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
    clicked ? set({ rotation: euler.toArray().slice(0, 3) }) : null;
  });

  return (
    //@ts-ignore
    <>
      <Float
        floatIntensity={50}
        speed={5}
        floatingRange={[-0.005, 0.005]}
        rotationIntensity={0.05}
        castShadow
        receiveShadow>
        <Center
          top
          center
          //@ts-ignore
          position={textLocalPosition}
          rotation={rotation}
          castShadow
          receiveShadow>
          <Text3D
            font={'/Poppins Medium_Regular.json'}
            size={5}
            bevelEnabled
            bevelSize={0.2}
            bevelSegments={5}
            height={2}
            receiveShadow
            castShadow>
            {text}
            <meshStandardMaterial color={color || 'white'} clipShadows />
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
        scale={1.5}>
        <Clone object={scene} scale={5} castShadow receiveShadow />
      </animated.mesh>
    </>
  );
}
