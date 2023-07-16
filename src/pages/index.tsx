import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

import * as React from 'react';
import { useState } from 'react';

// Crypto Imports
import { ConnectButton } from '@rainbow-me/rainbowkit';

// Search Bar Imports 
// import { searchProducts } from '~/lib/api';

import Hero from '~/components/landing/Hero';
import NavBar from '~/components/landing/NavBar';
import PayMethods from '~/components/landing/PayMethods';
import Layout from '~/components/layout/Layout';
import ArrowLink from '~/components/links/ArrowLink';
import ButtonLink from '~/components/links/ButtonLink';
import UnderlineLink from '~/components/links/UnderlineLink';
import UnstyledLink from '~/components/links/UnstyledLink';
import Seo from '~/components/Seo';

export default function Home() {
  const [query, setQuery] = useState('');
  const [productos, setProductos] = useState([]);

  // Api request example
  const hello = api.example.hello.useQuery({ text: "from our API" });


  return (
    <Layout>
      <Seo />

      <div>
        <NavBar />
        <Hero
          heading='CoinSpotter'
          message='The best place to find all crypto spots'
        />
        <PayMethods />
      </div>

      <main>
        <section className='bg-cream bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <h1 className='text-5xl'>
              We are <b>Almost</b> there!
            </h1>
            <p>Stay tuned for something amazing!!!</p>

            <div className='mb-5 mt-10'>
              <div className='mx-auto mt-2 w-full max-w-2xl rounded-full bg-white shadow'>
                <div
                  className='rounded-full bg-indigo-600 py-1 text-center text-xs leading-none text-white'
                  style={{ width: '165px' }}
                >
                  30%
                </div>
              </div>
            </div>

            <div className='mb-5'>
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </div>

            <div className='mb-5'>
              <ConnectButton />
            </div>

            <div className='mb-5'>
              <AuthShowcase />
            </div>

            {
              /*
            
              <ButtonLink className='mt-6' href='/components' variant='light'>
                See all components
              </ButtonLink>
              */
            }


            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Jose Miguel Oroño, Mauricio Garcia y Pedro Zavala
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
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
        Login Test
      </h1>
      <p className="text-center text-2xl">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
