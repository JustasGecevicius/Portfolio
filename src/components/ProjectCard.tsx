import { useRef, useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectTextType } from '../hooks/hooks';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface ProjectCardType {
  title: string;
  images: string[];
  text: ProjectTextType;
}

export default function ProjectCard({ title, images, text }: ProjectCardType) {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 }, x: 0 },
    hidden: { opacity: 0, scale: 1, x: '-100%' },
  };

  function Animation() {
    const controls = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return (
      <motion.div
        animate={controls}
        ref={ref}
        initial='hidden'
        variants={squareVariants}
        onClick={openProjectDiv}
        whileHover={{ scale: 1.1 }}
        className='w-5/12 md:w-2/12'>
        <div className='w-full'>
          <img
            src={images[0]}
            className='w-full rounded-md shadow-outline aspect-square md:rounded-lg'
            alt='projectImage'
          />
        </div>
        <h3 className='pt-2 text-center md:text-lg'>{text['name']}</h3>
      </motion.div>
    );
  }
  const [active, setActive] = useState(false);

  const openProjectDiv = () => {
    setActive((prev) => !prev);
  };

  const modal = useRef(null);
  // @ts-ignore
  active ? disableBodyScroll(modal) : enableBodyScroll(modal);

  return active ? (
    <ProjectModal
      title={title}
      setActive={setActive}
      images={images}
      text={text}
      ref={modal}
    />
  ) : (
    <Animation />
  );
}
