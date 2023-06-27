import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='flex flex-row justify-between w-screen px-5 py-2'>
      <Link to='/Portfolio-Website'>
        <h1>JG</h1>
      </Link>
      <div className='flex flex-row gap-x-5'>
        <Link to='/Portfolio-Website' className='flex items-center'>
          <h3 className=''>Home</h3>
        </Link>
        <Link to='/Portfolio-Website/Projects' className='flex items-center'>
          <h3 className=''>Projects</h3>
        </Link>
      </div>
    </div>
  );
}
