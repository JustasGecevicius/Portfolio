import { lazy, Suspense } from 'react';
import { ClipLoader } from 'react-spinners';
import { Projects } from './Projects';
import TechStack from './TechStack';
import { FloatyBoys } from '../components/FloatyBoys';

const HomeWindow = lazy(() => import('./HomeWindow'));
const About = lazy(() => import('./About'));

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center w-screen h-screen grow'>
          <ClipLoader color='#00aeff' />
        </div>
      }>
      <div className='relative flex flex-col w-screen grow'>
        <HomeWindow />
        <About />
        <TechStack />
        <Projects />
        <FloatyBoys />
      </div>
    </Suspense>
  );
}
