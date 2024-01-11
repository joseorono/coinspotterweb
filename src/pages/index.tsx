import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

import * as React from 'react';
import { useState } from 'react';

// Crypto Imports
import { ConnectButton } from '@rainbow-me/rainbowkit';

// import { searchProducts } from '~/lib/api';
import Image from 'next/image';


import PayMethods from '~/components/landing/PayMethods';
import PageLayout from '~/components/layout/PageLayout';
import ArrowLink from '~/components/links/ArrowLink';
import ButtonLink from '~/components/links/ButtonLink';
import UnderlineLink from '~/components/links/UnderlineLink';
import UnstyledLink from '~/components/links/UnstyledLink';


import homePageFeatures from "~/components/generic/homePageFeatures";
import PreFooterAction from "~/components/generic/PreFooterAction";
import HomePageFeatures from "~/components/generic/homePageFeatures";

import metamaskFox from '@/misc/MetaMaskFox.svg';

export default function Home() {
  const [query, setQuery] = useState('');
  const [productos, setProductos] = useState([]);

  // Api request example
  const hello = api.example.hello.useQuery({ text: "desde la Web 3." });

  return (
    <PageLayout pageTitle="CoinSpotter" useHomePageHeader={true}>
      <main>
      <PayMethods />
        <section className='bg-content text-center pt-6 pb-16'>

            <h1 className="py-4 text-white uppercase">
              Conéctate con tu wallet favorita
            </h1>

            <div className='mb-5 text-center'>
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </div>

            <Image 
              src={metamaskFox}
              alt="Metamask Logo"
              width={200}
              height={200}
              className="m-auto"
            />

            <span className="inline-block m-auto">
              <ConnectButton label="Conectar Wallet" />
            </span>

          {
            /*
            <div className='mb-5'>
              <AuthShowcase />              
            </div>
            */

          }

            {
              /*
            
              <ButtonLink className='mt-6' href='/components' variant='light'>
                See all components
              </ButtonLink>
              */
            }


          
        </section>
        <HomePageFeatures />
        <PreFooterAction />
      </main>
    </PageLayout>
  );
}


function AuthShowcase() {
  console.log("AuthShowcase")
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>
        Prueba del Login
      </h1>
      <p className="text-center text-2xl">
        {sessionData && <span>Identificado como {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Cerrar Sesión" : "Iniciar Sesión"}
      </button>
    </div>
  );
}
