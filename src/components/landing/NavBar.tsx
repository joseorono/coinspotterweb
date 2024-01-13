import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// import { logo } from '../assets';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, settextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
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
  }, []);

  return (
    <div
      style={{ background: `${color}` }}
      className='fixed left-0 top-0 z-10 w-full duration-300 ease-in'
    >
      <nav
        style={{ color: `${textColor}` }}
        className='m-auto flex max-w-[1240px] items-center justify-between p-4 text-white'
      >
        <Link href='/'>
          <h2 className='text-4xl font-bold'>CoinSpotter</h2>
        </Link>
        <ul className='hidden sm:flex'>
          <li className='cursor-pointer p-4'>
            <Link href='/'>Inicio</Link>
          </li>
          {
          /*
            <li className='cursor-pointer p-4'>
              <Link href='/'>About Us</Link>
            </li>
          */
          }
          <li className='cursor-pointer p-4'>
            <Link href='/support'>Soporte</Link>
          </li>
          <li className='cursor-pointer p-4'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className='cursor-pointer p-4'>
            <Link href='/verified'>Lugares Verificados</Link>
          </li>
          <li className='cursor-pointer p-4'>
            <Link href='/app/dashboard'>
              <button className="btn btn-secondary btn-outline btn-sm px-6 rounded-[2rem]">Entrar a App</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}

        <div className='z-10 block sm:hidden' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}

        <div
          className={
            nav
              ? 'absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden'
              : 'absolute bottom-0 left-[-100%] right-0 top-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden'
          }
        >
          <ul>
            <li className='cursor-pointer p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Inicio</Link>
            </li>
            <li className='cursor-pointer p-4 text-4xl hover:text-gray-500'>
              <Link href='/support'>Soporte</Link>
            </li>
            <li className='cursor-pointer p-4 text-4xl hover:text-gray-500'>
              <Link href='/blog'>Blog</Link>
            </li>
            <li className='cursor-pointer p-4 text-4xl hover:text-gray-500'>
              <Link href='/app/dashboard'>Ir a App</Link>
            </li>
            <li className='cursor-pointer p-4 text-4xl hover:text-gray-500'>
              <small className="block text-center">
                Dark Mode
              </small>
              <input type="checkbox" className="toggle toggle-lg" id="theme-toggle" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
