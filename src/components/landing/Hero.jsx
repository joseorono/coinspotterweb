import React, { Component } from 'react';

const Hero = ({ heading, message }) => {
  return (
    <div className='custom_img flex h-screen items-center justify-center bg-cover bg-fixed bg-center'>
      {/* Overlay*/}
      <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] bg-black/60' />
      <div className='z-[2] mt-[5rem] p-5 text-white'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='border px-8 py-2'>Search</button>
        <div className='hero_img no-repeat mt-10 h-40 w-full bg-center bg-no-repeat'></div>
      </div>
    </div>
  );
};

export default Hero;
