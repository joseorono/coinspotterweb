import React from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "public/logos/cs_white_outline.png";
import UnderlineLink from "../links/UnderlineLink";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[998px] pt-12 ">
      <div className="flex flex-col justify-around md:flex-row">
        <div className="flex flex-col items-center gap-4 pb-4 md:flex-row">
          <Image src={LOGO} width={150} height={150} alt="/" />
          <h2>CoinSpotter</h2>
        </div>
        <div className="my-4 flex flex-row items-center justify-center gap-6 md:justify-around">
          <AiFillFacebook size={30} />
          <AiOutlineInstagram size={30} />
          <AiOutlineTwitter size={30} />
          <BsYoutube size={30} />
        </div>
      </div>
      <div>
        <hr className="m-auto my-4 w-[75%] md:w-[90%]" />
        <ul className="my-2 flex-row text-center md:flex md:justify-evenly">
          <Link href="/">
            <li className="list-none py-4 pr-6 text-center text-sm font-bold uppercase text-white">
              Inicio
            </li>
          </Link>
          <Link href="/">
            <li className="list-none py-4 pr-6 text-center text-sm font-bold uppercase text-white">
              Soporte
            </li>
          </Link>
          <Link href="/">
            <li className="py-4 pr-6 text-center text-sm font-bold uppercase text-white">
              Blog
            </li>
          </Link>
          <Link href="/">
            <li className="py-4 pr-6 text-center text-sm font-bold uppercase text-white">
              Términos y condiciones
            </li>
          </Link>
        </ul>
        <p className="my-2 p-2 text-center text-xs uppercase text-white">
          © {new Date().getFullYear()} por {" "}
          <UnderlineLink href="https://github.com/joseorono/">
            Jose Miguel Oroño
          </UnderlineLink> ,Mauricio Garcia y Pedro Zavala
          <small className="block text-bold text-center mt-2">
            Illustrations by <Link prefetch={false} href="https://www.flaticon.com/free-icons/placeholder">FlatIcon icon_small</Link> and <Link prefetch={false} href="https://www.freepik.com/free-vector/boss-man-concept-illustration_40467501.htm">storyset on FreePik</Link>
          </small>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
