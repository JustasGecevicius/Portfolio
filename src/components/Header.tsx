/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useRef, useEffect, Suspense } from 'react';
import Contacts from '../pages/Contacts';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Canvas } from '@react-three/fiber';
import { Center, Float, Text3D } from '@react-three/drei';

export default function Header() {
  const [contactsOpen, setContactsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const modal = useRef(null);

  const handleScroll = () => {
    window.scrollY !== 0 ? setIsTop(false) : setIsTop(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <>
      <Suspense>
        <div
          className={
            'fixed flex flex-row justify-between w-screen px-5 py-2 z-10 max-h-14 bg-[#00111a]'
          }>
          <a
            className='max-w-[100px]'
            onClick={() =>
              document?.getElementById('main')?.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
              })
            }>
            <Canvas shadows camera={{ position: [0, 0, 10] }}>
              <Float
                floatIntensity={1}
                speed={5}
                floatingRange={[-0.1, 0.1]}
                rotationIntensity={0.2}
                position={[0, -3, 3]}
                onPointerLeave={(e) => {
                  console.log(e);
                  e.object.scale.set(1, 1, 1);
                }}
                onPointerEnter={(e) => {
                  e.object.scale.set(1.1, 1.1, 1.1);
                }}>
                <Center top>
                  <Text3D
                    font={'/Poppins Medium_Regular.json'}
                    size={5.5}
                    bevelEnabled
                    bevelSize={0.2}
                    bevelSegments={5}
                    height={2}
                    receiveShadow
                    castShadow>
                    JG
                    <meshStandardMaterial color={'#00aeff'} />
                  </Text3D>
                </Center>
              </Float>
              <pointLight position={[-5, 0, 10]} intensity={200} color='#ffffff' />
              <pointLight position={[5, 0, 10]} intensity={200} color='#ffffff' />
            </Canvas>
          </a>
          <div className='flex flex-row gap-x-5 md:pr-4'>
            <a
              onClick={() =>
                document?.getElementById('projects')?.scrollIntoView({
                  block: 'start',
                  behavior: 'smooth',
                })
              }
              className={`md:text-xl ${
                !isTop && 'text-[#00aeff]'
              } flex items-center hover:text-light_blue`}>
              Projects
            </a>
            <button
              className={`md:text-xl ${
                !isTop ? 'text-[#00aeff]' : 'text-white'
              } flex items-center hover:text-light_blue`}
              onClick={() => {
                setContactsOpen(true);
                // @ts-ignore
                disableBodyScroll(modal);
              }}>
              Contacts
            </button>
          </div>
        </div>
      </Suspense>
      {contactsOpen && (
        <div className='fixed top-0 bottom-0 flex items-center justify-center w-screen bg-[#242424] z-10'>
          <p
            className='fixed hover:ring-2 hover:ring-[#00aeff] top-0 right-0 flex items-center justify-center w-6 m-2 antialiased text-center text-[#00aeff] bg-white rounded-full md:text-2xl aspect-square md:w-10'
            onClick={() => {
              setContactsOpen(false);
              // @ts-ignore
              enableBodyScroll(modal);
            }}>
            &#10005;
          </p>
          <Contacts />
        </div>
      )}
    </>
  );
}
