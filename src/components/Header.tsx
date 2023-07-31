import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Contacts from '../pages/Contacts';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function Header() {
  const [contactsOpen, setContactsOpen] = useState(false);

  const modal = useRef(null);

  return (
    <>
      <div className='flex flex-row justify-between w-screen px-5 py-2'>
        <Link to='/'>
          <h1>JG</h1>
        </Link>
        <div className='flex flex-row gap-x-5 md:pr-4'>
          <Link to='/Projects' className='flex items-center md:text-xl'>
            Projects
          </Link>
          <button
            className='md:text-xl text-sky-500'
            onClick={() => {
              setContactsOpen(true);
              // @ts-ignore
              disableBodyScroll(modal);
            }}>
            Contacts
          </button>
        </div>
      </div>
      {contactsOpen && (
        <div className='fixed top-0 bottom-0 flex items-center justify-center w-screen bg-[#242424] z-10'>
          <p
            className='fixed hover:ring-2 hover:ring-[#00aeff] top-0 right-0 flex items-center justify-center w-6 m-2 antialiased text-center text-[#00aeff] bg-white rounded-full md:text-2xl aspect-square md:w-10'
            onClick={() => {
              setContactsOpen(false);
              // @ts-ignore
              enableBodyScroll(modal);
            }}>
            &#10005;
          </p>
          <Contacts />
        </div>
      )}
    </>
  );
}
