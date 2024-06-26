import { Center, Float, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState, useEffect, Suspense } from 'react';
import { ClipLoader } from 'react-spinners';

export default function HomeWindow() {
  const [displayBackground, setDisplayBackground] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      console.log(window.innerWidth, 'RESIZE');
      setDisplayBackground(window.innerWidth < 768 ? false : true);
    };

    if (window.innerWidth < 768) {
      setDisplayBackground(false);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <Suspense
      fallback={
        <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-screen h-screen'>
          <ClipLoader color='#00aeff' className='absolute left-1/2' />
        </div>
      }>
      <div
        id='main'
        className='flex flex-col justify-center p-5 bg-transparent h-extraScreen md:p-10'>
        <h1 className='flex flex-col items-center justify-center text-5xl font-extrabold text-center text-white md:justify-start md:flex-row md:text-left md:text-8xl md:font-extrabold'>
          Hi, I'm
          <Canvas
            shadows
            camera={{ position: [0, 0, 50], fov: 70, zoom: 6 }}
            className='max-h-[115px] max-w-[350px] md:max-w-[450px]'>
            <Float
              floatIntensity={1}
              speed={5}
              rotationIntensity={0.2}
              position={[0, -4, 0]}
              floatingRange={[-0.01, 0.01]}
              scale={displayBackground ? 1.5 : 1.2}>
              <Center top>
                <Text3D
                  font={'/Poppins Medium_Regular.json'}
                  size={5}
                  bevelEnabled
                  bevelSize={0.15}
                  bevelSegments={5}
                  height={1}
                  receiveShadow
                  castShadow>
                  Justas
                  <meshStandardMaterial color={'#00aeff'} />
                </Text3D>
              </Center>
            </Float>
            <pointLight position={[-5, 0, 10]} intensity={150} color='#ffffff' />
            <pointLight position={[5, 0, 10]} intensity={150} color='#ffffff' />
          </Canvas>
        </h1>
        <p className='relative text-xl text-center text-white md:text-left md:text-4xl'>
          A Front-end Web Developer
        </p>
      </div>
    </Suspense>
  );
}
