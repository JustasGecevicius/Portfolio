import { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import image from '../assets/W016.jpg';
import HomeWindow from './HomeWindow';
import About from './About';
import Contacts from './Contacts';

export default function Home() {
  const [backgroundImages, setBackgroundImages] = useState();

  const fetchImages = async () => {
    const storage = await getStorage();
    const imagesRef = await ref(storage, 'Numbers');
    const imagesList = await listAll(imagesRef);

    const promises = Object.keys(imagesList['items']).map((imageRef) =>
      // @ts-ignore
      getDownloadURL(imagesList['items'][imageRef])
    );

    return Promise.all(promises);
  };

  useEffect(() => {
    fetchImages().then((response) => {
      // @ts-ignore
      setBackgroundImages((prev) => {
        return response;
      });
    });
  }, []);

  return (
    <div className='w-screen h-fit'>
      {backgroundImages && (
        <>
          <HomeWindow images={backgroundImages} backgroundImage={image} />
          <About />
          {/* <Contacts /> */}
        </>
      )}
    </div>
  );
}
