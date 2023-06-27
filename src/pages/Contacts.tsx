import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import linkedIn from '../assets/linkedin.png';

export default function Contacts() {
  return (
    <div className='fixed right-0 flex flex-col bg-[#242424] rounded-tl-xl rounded-bl-xl top-1/2 gap-y-2'>
      <a
        className='flex items-center justify-center p-2 aspect-square'
        href='https://github.com/JustasGecevicius'
        target='_b'>
        <img
          className='w-10 bg-white rounded-full aspect-square'
          src={github}
          alt='github'
        />
      </a>
      <a
        className='flex items-center justify-center p-2'
        href='mailto:justas.gecevicius.22@neoma-bs.com'
        target='_b'>
        <img className='w-10 aspect-square' src={gmail} alt='gmail' />
      </a>
      <a
        className='flex items-center justify-center p-2'
        href='https://www.linkedin.com/in/justas-gecevicius-34aa94186/'
        target='_b'>
        <img className='w-10 aspect-square' src={linkedIn} alt='linkedIn' />
      </a>
    </div>
  );
}
