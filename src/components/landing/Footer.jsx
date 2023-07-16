import React from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "public/logos/cs_white_outline.png";
import UnderlineLink from "../links/UnderlineLink";

const Footer = () => {
  return (
    <footer className="bg-[#3a3a3c] pt-12">
      <div className="flex justify-around ">
        <div className="flex flex-col justify-evenly">
          <Link href="/">
            <li className="list-none py-4 pr-6 text-center text-xs text-white underline">
              How it Works
            </li>
          </Link>
          <Link href="/">
            <li className="list-none py-4 pr-6 text-center text-xs text-white underline">
              How it Works
            </li>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Image src={LOGO} width={150} height={150} alt="/" />
        </div>
        <ul className="flex flex-col justify-evenly">
          <Link href="/">
            <li className="py-4 pr-6 text-center text-xs text-white underline">
              How it Works
            </li>
          </Link>
          <Link href="/">
            <li className="py-4 pr-6 text-center text-xs text-white underline">
              Terms of Use
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <hr className="m-auto my-4 w-[90%]" />
        <p className="text-center text-xs text-white p-2">
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='/'>
            Jose Miguel Oroño, Mauricio Garcia y Pedro Zavala
          </UnderlineLink>
        </p>
      </div>
    </footer>
    
  );
};

export default Footer;
