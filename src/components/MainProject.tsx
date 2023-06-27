import { useProjectImages, useProjectText } from '../hooks/hooks';
import { Firestore } from 'firebase/firestore/lite';
import githubSVG from '../assets/github-mark-white.svg';

export interface MainProjectType {
  project: string;
  db: Firestore;
  index: number;
}

export default function MainProject({ project, db, index }: MainProjectType) {
  const projectImages = useProjectImages(project, db);
  const projectText = useProjectText(project, db);

  return (
    projectImages &&
    projectText && (
      <div className='flex flex-col items-center pt-2 h-fit md:flex-row md:gap-x-8 md:pt-10'>
        <img
          src={projectImages[0]}
          alt='Project Image'
          className='rounded-lg md:grow md:basis-0 md:h-full md:w-48'
        />
        <div className='pt-2 h-fit md:grow md:basis-0 md:pt-0'>
          <h3 className='text-lg text-center md:text-3xl'>{projectText['name']}</h3>
          <div className='pt-2 h-fit md:pt-4'>
            <p className=''>{projectText['p']}</p>
            <h4 className='pt-2 font-semibold text-center md:pt-4 md:text-xl'>
              Technologies Used
            </h4>
            <ul className='pt-2 text-center md:pt-4'>
              {projectText['tech'].map((elem, index) => {
                return (
                  <li key={index} className='italic'>
                    {elem}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex flex-row justify-center pt-2 gap-x-2 md:pt-4'>
            <a href={projectText['link']} target='_b' className='h-full'>
              <button className='h-12'>Visit Website</button>
            </a>
            <a href={projectText['linkGithub']} target='_b' className='h-full'>
              <button className='h-12 p-0 px-2'>
                <img src={githubSVG} alt='zeba' className='h-2/3 aspect-square' />
              </button>
            </a>
          </div>
          <p className='w-full mt-4 mb-2 border-b-2 border-white border-solid md:hidden'></p>
        </div>
      </div>
    )
  );
}
