import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

interface ThreeDType {
  image: string;
}

export default function ThreeD({ image }: ThreeDType) {
  return (
    <div className='w-1/2 h-full'>
      <Canvas camera={{ position: [25, 0, 0] }} shadows>
        <ambientLight />
        <Box imageLink={image} />
      </Canvas>
    </div>
  );
}

interface BoxType {
  imageLink: string;
}

function Box({ imageLink }: BoxType) {
  // This reference will give us direct access to the mesh
  // Set up state for the hovered and active state
  const colorMap = useTexture(imageLink);
  return (
    <mesh visible rotation-y={Math.PI * 0}>
      <boxGeometry args={[16, 9, 16]} />
      <meshStandardMaterial map={colorMap} />
      <OrbitControls />
    </mesh>
  );
}
