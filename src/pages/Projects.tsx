import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useProjectList } from '../hooks/hooks';
import MainProject from '../components/MainProject';
import { SmallProject } from '../components/SmallProject';
import { getFirebaseConfig } from '../config/firebaseConfig';
import { ClipLoader } from 'react-spinners';

const config = getFirebaseConfig();
const app = initializeApp(config);
const db = getFirestore(app);

export const Projects = () => {
  const projectsList = useProjectList(db);

  return (
    <div className='flex flex-col min-h-full p-4 overflow-x-hidden grow md:p-10'>
      <h2 className='text-3xl font-semibold text-center md:text-5xl'> Projects </h2>
      {projectsList ? (
        <div className='pt-2'>
          {projectsList.MainProjects && (
            <div className='pt-2 md:pt-8'>
              <h3 className='text-xl font-semibold text-center md:text-3xl'>
                Main Projects
              </h3>
              <div className='[&>*:nth-child(odd)]:md:flex-row-reverse'>
                {projectsList.MainProjects.map((project, index) => (
                  <MainProject project={project} db={db} key={index} />
                ))}
              </div>
            </div>
          )}
          {projectsList.SmallProjects && (
            <div className='pt-4'>
              <h3 className='text-base font-semibold text-center md:text-3xl md:pt-10'>
                Smaller/Older Projects
              </h3>
              <div className='flex flex-row flex-wrap justify-center gap-3 pt-2 md:pt-10 md:gap-6'>
                {projectsList.SmallProjects.map((project, index) => (
                  <SmallProject project={project} db={db} key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='flex items-center justify-center h-full grow'>
          <ClipLoader color='#00aeff' />
        </div>
      )}
    </div>
  );
};
