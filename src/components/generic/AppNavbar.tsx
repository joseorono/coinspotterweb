import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import SearchBar from '~/components/SearchInput';
import Image from 'next/image';
import csLogo from '@/logos/cs_white_outline.png';
import placeholderPfp from '@/placeholder/karamaloran.jpg';


// import { logo } from '../assets';
function getRandomInt(min:number, max:number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const AppNavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, settextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    /*
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#fff');
        settextColor('#000');
      } else {
        setColor('transparent');
        settextColor('white');
      }
    };
    
    window.addEventListener('scroll', changeColor);
    */
  }, []);
  // mb-16 is the exact minimum margin-bottom to avoid the navbar overlapping with the content
  // So I used mb-20 for exactly 1rem extra margin-bottom
  return (
    <header className="header-area mb-20">
      {/* Navbar */}
      <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-lg border-none">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-5 p-2 shadow-lg bg-base-100 rounded-box w-52">
           
              <li>
                <Link href={`/app/dashboard`}>     
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href={`/app/places/${getRandomInt(1,3)}`}>     
                    Random Place
                </Link>
              </li>
              <li>
                <Link href={`/app/favorites`}>     
                    Favorites
                </Link>
              </li>
              <li>
                <Link href={`/app/search`}>     
                    Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">
            <Image src={csLogo} width={48} height={48} alt='CoinSpotter' />
          </a>
        </div>
        <div className="navbar-end">
          <label htmlFor="my-modal-3" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </label>
        </div>

        {/* User Button */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={placeholderPfp} width={40} height={40} alt='User' />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href='javascript:void(0);' className="justify-between">
                Profile
                <span className="badge">Coming Soon</span>
              </a>
            </li>
            <li>
              <a href='javascript:void(0);' className="justify-between">
                Settings
                <span className="badge">Coming Soon</span>
              </a>
            </li>
            <li>
              <Link href='/'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End-Navbar */}
  
      {/* Search Modal */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle border-none bg-base-100 text-black font-bold absolute right-2 top-2">✕</label>
          <div className="form-control pr-6 py-4">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>  
  );
};

export default AppNavBar;
