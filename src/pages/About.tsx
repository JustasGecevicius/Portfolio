import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { InView } from 'react-intersection-observer';

export default function About() {
  const [isTitleInView, setIsTitleInview] = useState(false);
  const [isAboutInView, setIsAboutInview] = useState(false);
  const [isTextInView, setIsTextInview] = useState(false);
  const [isLinkInView, setIsLinkInview] = useState(false);

  const downloadPDF = async () => {
    try {
      const storage = await getStorage();
      const url = await getDownloadURL(ref(storage, 'Web Dev CV.pdf'));
      const alink = document.createElement('a');
      alink.href = url;
      alink.target = '_b';
      alink.click();
    } catch (error) {
      console.log(error);
    }
  };

  const squareVariants = useRef({
    visible: { opacity: 1, scale: 1, transition: { duration: 1 }, x: '0' },
    hidden: { opacity: 0, scale: 1, x: '-100%' },
  });

  function Animation() {
    return (
      <>
        <InView
          triggerOnce
          onChange={(inView) => {
            console.log('CHANGE', inView);
            setIsTitleInview(inView);
          }}>
          <motion.p
            animate={isTitleInView ? 'visible' : 'hidden'}
            initial='hidden'
            variants={squareVariants.current}
            className='text-lg text-center max-w-prose text-white_blue md:text-xl'>
            Intro
          </motion.p>
        </InView>
        <InView
          triggerOnce
          onChange={(inView) => {
            setIsAboutInview(inView);
          }}>
          <motion.h2
            animate={isAboutInView ? 'visible' : 'hidden'}
            initial='hidden'
            variants={squareVariants.current}
            className='text-3xl font-bold text-center max-w-prose md:text-4xl'>
            About Me
          </motion.h2>
        </InView>
        <InView triggerOnce onChange={(inView) => setIsTextInview(inView)}>
          <motion.div
            animate={isTextInView ? 'visible' : 'hidden'}
            initial='hidden'
            variants={squareVariants.current}
            className='mt-4 text-justify max-w-prose md:text-lg'>
            I am a <span className='italic text-blue'>Dedicated and Inquisitive</span>{' '}
            Front-end Developer. With the expert guidance of several Software and
            Front-end Development professionals I have managed to progress swiftly and
            understand the market standards for writing{' '}
            <span className='italic text-blue'>Clean and Professional code</span>. <br />{' '}
            <br />I got hooked on coding from the moment I picked up an Arduino kit. The
            fact that the code I wrote made real world changes seemed fascinating to me.
            This is the reasson why I got drawn to Front-end development as well. The
            changes made to the code appeared on the screen instantly and provided instant
            feedback. This
            <span className='italic text-blue'> gets me Inspired</span> every single time
            to <span className='italic text-blue'>Explore new Possibilities</span>.
            <br /> <br />
            For all of my skills click <span className='italic text-blue'>
              Resume
            </span>{' '}
            and for all of my latest projects click
            <span className='italic text-blue'> Projects</span>. Feel free to explore my{' '}
            <span className='italic text-blue'>Github</span> or contact me using the
            <span className='italic'> contacts page.</span>
          </motion.div>
        </InView>
        <InView triggerOnce onChange={(inView) => setIsLinkInview(inView)}>
          <motion.div
            className='flex flex-row justify-center gap-2 mt-4 max-w-prose'
            animate={isLinkInView ? 'visible' : 'hidden'}
            initial='hidden'
            variants={squareVariants.current}>
            <button type='button' onClick={downloadPDF}>
              <p className='inline-block text-blue md:text-lg hover:text-white_blue'>
                Click Here for a Resume!
              </p>
            </button>
          </motion.div>
        </InView>
      </>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen p-5'>
      <Animation />
    </div>
  );
}
