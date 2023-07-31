import { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import image from '../assets/W016.avif';
import HomeWindow from './HomeWindow';
import About from './About';
import { ClipLoader } from 'react-spinners';

export default function Home() {
  return (
    <div className='flex flex-col w-screen grow'>
      {image ? (
        <>
          <HomeWindow backgroundImage={image} />
          <About />
        </>
      ) : (
        <div className='flex items-center justify-center h-full grow'>
          <ClipLoader color='#00aeff' />
        </div>
      )}
    </div>
  );
}
