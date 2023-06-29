import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '../components/Footer';

export default function About() {
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

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 }, x: 0 },
    hidden: { opacity: 1, scale: 1, x: '-100%' },
  };

  function Animation() {
    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();

    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    useEffect(() => {
      if (inView2) {
        controls2.start('visible');
      }
    }, [controls2, inView2]);
    useEffect(() => {
      if (inView3) {
        controls3.start('visible');
      }
    }, [controls3, inView3]);

    return (
      <>
        <motion.h2
          ref={ref2}
          animate={controls}
          initial='hidden'
          variants={squareVariants}
          className='text-xl max-w-prose'>
          About Me
        </motion.h2>
        <motion.div
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={squareVariants}
          className='max-w-prose'>
          I am a <span className='italic'>Dedicated and Inquisitive</span> Front-end
          Developer. With the expert guidance of several Software and Front-end
          Development professionals I have managed to progress swiftly and understand the
          market standards for writing{' '}
          <span className='italic'>Clean and Professional code</span>. <br /> <br />I got
          hooked on coding from the moment I picked up an Arduino kit. The fact that the
          code I wrote made real world changes seemed fascinating to me. This is the
          reasson why I got drawn to Front-end development as well. The changes made to
          the code appeared on the screen instantly and provided instant feedback. This
          gets me <span className='italic'>Inspired</span> every single time to{' '}
          <span className='italic'>Explore new Possibilities</span>.
          <br /> <br />
          For all of my skills click <span className='italic'>Resume</span> and for all of
          my latest projects click
          <span className='italic'> Projects</span>. Feel free to explore my{' '}
          <span className='italic'>Github</span> or contact me using the
          <span className='italic'> buttons on the right.</span>
        </motion.div>
        <motion.div
          className='max-w-prose'
          ref={ref3}
          animate={controls}
          initial='hidden'
          variants={squareVariants}>
          <button type='button' className='resume' onClick={downloadPDF}>
            Resume
          </button>
          <Link to='/Portfolio-Website/projects'>
            <button type='button' className='Projects'>
              Projects
            </button>
          </Link>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen p-5 gap-y-5'>
        <Animation />
      </div>
      <Footer />
    </>
  );
}
