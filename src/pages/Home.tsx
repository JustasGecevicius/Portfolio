import { lazy, Suspense } from 'react';
import image from '../assets/background4.avif';
import { ClipLoader } from 'react-spinners';
import { Projects } from './Projects';
import TechStack from './TechStack';

const HomeWindow = lazy(() => import('./HomeWindow'));
const About = lazy(() => import('./About'));

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center h-full grow'>
          <ClipLoader color='#00aeff' />
        </div>
      }>
      <div className='flex flex-col w-screen grow'>
        <HomeWindow backgroundImage={image} />
        <About />
        <TechStack />
        <Projects />
      </div>
    </Suspense>
  );
}
