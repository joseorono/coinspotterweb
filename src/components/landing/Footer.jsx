import React from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "public/logos/cs_white_outline.png";

const Footer = () => {
  return (
    <div className="flex justify-around bg-[#3a3a3c] pt-12">
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
        <Image src={LOGO} width="64px" height="64px" alt="/" />
        <Link href="/">
          <li className="list-none py-4 pr-6 text-center text-xs text-white">
            @ 2023 COINSPOTTER By Jose Miguel Oroño, Mauricio Garcia y Pedro
            Zavala
          </li>
        </Link>
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
  );
};

export default Footer;
