import React, { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import SearchBar from '~/components/SearchInput';
import Image from 'next/image';
import csLogo from '@/logos/cs_white_outline.png';
import placeholderPfp from '@/user_pfp/karamaloran.jpg';
import placeholderLoggedOutPfp from '@/user_pfp/placeholder.png';
import { api } from "~/utils/api";
import LoginButton from "~/components/buttons/LoginButton";

// import { logo } from '../assets';
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const AppNavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, settextColor] = useState("white");

  const { data: sessionData } = useSession();
  // const handleSignButtonClick = () => {
  //   if (sessionData){
  //     signOut();
  //   }else{
  //     signIn();
  //   }
  // };

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

  // const LoginButton = () => {

  //     return (
  //       <div className="flex flex-col items-center justify-center gap-4">
  //         <button
  //           className="bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
  //           onClick={handleSignButtonClick}
  //         >
  //           {sessionData ? "Cerrar Sesión" : "Iniciar Sesión"}
  //         </button>
  //       </div>
  //     );
  //   }

  // mb-16 is the exact minimum margin-bottom to avoid the navbar overlapping with the content
  // So I used mb-20 for exactly 1rem extra margin-bottom
  return (
    <header className="header-area mb-20">
      {/* Navbar */}
      <div className="navbar fixed left-0 right-0 top-0 z-50 border-none bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-circle btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact menu dropdown-content rounded-box mt-5 w-52 bg-base-100 p-2 shadow-lg"
            >
              <li>
                <Link href={`/app/dashboard`}>Dashboard</Link>
              </li>
              <li>
                <Link href={`/app/places/${getRandomInt(1, 3)}`}>
                  Lugar Aleatorio
                </Link>
              </li>
              <li>
                <Link href={`/app/places/favorites`}>Favoritos</Link>
              </li>
              <li>
                <Link href={`/app/search`}>Búsqueda</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl normal-case">
            <Image src={csLogo} width={48} height={48} alt="CoinSpotter" />
          </a>
        </div>
        <div className="navbar-end">
          <label htmlFor="my-modal-3" className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </label>
        </div>

        {/* User Button */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
            <div className="w-10 rounded-full">
              {sessionData ? (
                  <Image
                    src={sessionData.user?.image ?? placeholderLoggedOutPfp}
                    width={40}
                    height={40}
                    alt="User"
                  />
                ) : (
                  <Image
                    src={placeholderLoggedOutPfp}
                    width={40}
                    height={40}
                    alt="User"
                  />
                )
              }

            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a href="javascript:void(0);" className="justify-between">
                Perfil
                <span className="badge">WIP</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="justify-between">
                Configuración
                <span className="badge">WIP</span>
              </a>
            </li>
            <li>
              {/* <button
          className="bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          onClick={handleSignButtonClick}
         >
          {sessionData ? "Cerrar Sesión" : "Iniciar Sesión"}
        </button> */}
              <LoginButton />
            </li>
          </ul>
        </div>
      </div>
      {/* End-Navbar */}

      {/* Search Modal */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-circle btn-sm absolute right-2 top-2 border-none bg-base-100 font-bold text-black"
          >
            ✕
          </label>
          <div className="form-control py-4 pr-6">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppNavBar;
