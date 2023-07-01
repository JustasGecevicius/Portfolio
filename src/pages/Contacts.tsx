import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import linkedIn from '../assets/linkedin.png';

export default function Contacts() {
  return (
    <div className='flex flex-row bg-[#242424] gap-4'>
      <a
        className='flex items-center justify-center p-2 aspect-square hover:ring-2 hover:ring-[#00aeff] rounded-xl'
        href='https://github.com/JustasGecevicius'
        target='_b'>
        <img
          className='w-10 bg-white rounded-full aspect-square'
          src={github}
          alt='github'
        />
      </a>
      <a
        className='flex items-center justify-center p-2  hover:ring-2 hover:ring-[#00aeff] rounded-xl'
        href='mailto:justas.gecevicius.22@neoma-bs.com'
        target='_b'>
        <img className='w-10 aspect-square' src={gmail} alt='gmail' />
      </a>
      <a
        className='flex items-center justify-center p-2  hover:ring-2 hover:ring-[#00aeff] rounded-xl'
        href='https://www.linkedin.com/in/justas-gecevicius-34aa94186/'
        target='_b'>
        <img className='w-10 aspect-square' src={linkedIn} alt='linkedIn' />
      </a>
    </div>
  );
}
