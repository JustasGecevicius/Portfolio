import { ProjectTextType } from '../hooks/hooks';
import githubSVG from '../assets/github-mark-white.svg';

interface ProjectModaltype {
  title: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  images: string[];
  text: ProjectTextType;
  ref: React.MutableRefObject<null>;
}

export default function ProjectModal({
  title,
  setActive,
  images,
  text,
  ref,
}: ProjectModaltype) {
  return (
    <div className='h-screen'>
      <div className='fixed top-0 bottom-0 left-0 right-0 z-10 bg-neutral-800'></div>
      <div className='fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col w-screen h-screen p-2'>
        <p
          className='fixed top-0 right-0 w-6 m-2 text-xl antialiased text-center text-black bg-white rounded-full aspect-square'
          onClick={() => {
            setActive(false);
          }}>
          &#10005;
        </p>
        <div className='flex flex-col items-center w-full overflow-y-auto shadow-outline aspect-square basis-0 grow'>
          {Object.values(images).map((elem, index) => {
            return (
              <img
                key={index}
                className='h-full pt-1 rounded-md aspect-square'
                src={elem}
                alt='ProjectImage'
              />
            );
          })}
        </div>
        <div className='overflow-y-auto basis-0 grow'>
          <h3 className='p-2 text-center'>{text['name']}</h3>
          <p className=''>{text['p']}</p>
          <h4 className='p-2 text-center'>Technologies Used</h4>
          <ul className='p-2 text-center'>
            {text['tech'].map((elem, index) => {
              return (
                <li key={index} className='italic'>
                  {elem}
                </li>
              );
            })}
          </ul>
          <div className='flex flex-row justify-center pt-2 overflow-hidden h-14 gap-x-2'>
            <a href={text['link']} target='_b' className='h-full'>
              <button className='h-full'>Visit Website</button>
            </a>
            <a href={text['linkGithub']} target='_b' className='h-full'>
              <button className='h-full'>
                <img src={githubSVG} alt='zeba' className='h-2/3 aspect-square' />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
