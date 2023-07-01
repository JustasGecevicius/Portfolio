import { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import image from '../assets/W016.jpg';
import HomeWindow from './HomeWindow';
import About from './About';
import { ClipLoader } from 'react-spinners';

export default function Home() {
  const [backgroundImages, setBackgroundImages] = useState<string[]>();

  const fetchImages = async () => {
    const storage = await getStorage();
    const imagesRef = await ref(storage, 'Numbers');
    const imagesList = await listAll(imagesRef);

    console.log(imagesList);

    const promises = Object.keys(imagesList['items']).map((_, index) => {
      return getDownloadURL(imagesList['items'][index]);
    });

    return Promise.all(promises);
  };

  useEffect(() => {
    fetchImages().then((response) => {
      setBackgroundImages(response);
    });
  }, []);

  return (
    <div className='flex flex-col w-screen grow'>
      {backgroundImages ? (
        <>
          <HomeWindow images={backgroundImages} backgroundImage={image} />
          <About />
          {/* <Contacts /> */}
        </>
      ) : (
        <div className='flex items-center justify-center h-full grow'>
          <ClipLoader color='#00aeff' />
        </div>
      )}
    </div>
  );
}
