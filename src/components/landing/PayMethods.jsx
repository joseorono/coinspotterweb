import Image from 'next/image';
import React from 'react';
import BUSD from 'src/assets/busdLogo.png';
import RESERVE from 'src/assets/reserveLogo.png';
import USDT from 'src/assets/usdtLogo.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full px-2 py-10'>
      <div className='mx-auto flex h-full max-w-[1240px] flex-col justify-center'>
        <p className='text-bold text-xl uppercase tracking-widest text-[#50af95]'>
          Our Pay Methods
        </p>
        <h2 className='py-4'>Coins And Apps</h2>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={BUSD} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>BUSD</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={RESERVE} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>RESERVE</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={USDT} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>USDT</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
