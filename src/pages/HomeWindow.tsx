import { Center, Float, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState, useEffect, Suspense } from 'react';
import { ClipLoader } from 'react-spinners';
interface HomeWindowType {
  backgroundImage: string;
}

export default function HomeWindow({ backgroundImage }: HomeWindowType) {
  const [displayBackground, setDisplayBackground] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      setDisplayBackground(window.innerWidth < 768 ? false : true);
    };

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
        className='flex flex-col justify-center p-5 bg-left bg-no-repeat bg-cover h-extraScreen md:p-10 backgroundShadow'
        style={{
          backgroundImage: `${displayBackground ? `url(${backgroundImage})` : ''}`,
        }}>
        <h1 className='flex flex-col items-center justify-center text-5xl font-extrabold text-center text-white md:justify-start md:flex-row md:text-left md:text-8xl md:font-extrabold'>
          Hi, I'm
          <Canvas
            shadows
            camera={{ position: [0, 0, 10], fov: 70 }}
            className='max-h-[115px] max-w-[350px] md:max-w-[400px]'>
            <Float
              floatIntensity={1}
              speed={5}
              rotationIntensity={0.2}
              position={[0, -4.5, 0]}
              floatingRange={[-0.01, 0.01]}
              scale={displayBackground ? 1.5 : 1.2}>
              <Center top>
                <Text3D
                  font={'/Poppins Medium_Regular.json'}
                  size={5.5}
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
            <pointLight position={[-5, 0, 10]} intensity={200} color='#ffffff' />
            <pointLight position={[5, 0, 10]} intensity={200} color='#ffffff' />
          </Canvas>
        </h1>
        <p className='relative text-xl text-center text-white md:text-left md:text-4xl'>
          A Front-end Web Developer
        </p>
      </div>
    </Suspense>
  );
}
