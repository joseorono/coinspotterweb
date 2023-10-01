import React, { FC } from 'react';

interface GenericHeroProps {
  PageTitle: string;
  bgImg?: string;
  bgOpacity? : number;
}

const GenericHero: FC<GenericHeroProps> = ({ PageTitle, bgImg, bgOpacity }) => {
    const opacity = bgOpacity ? bgOpacity : 0.3;

    const containerStyle: React.CSSProperties = {
        background: bgImg ? `url(${bgImg})` : `hsl(var(--b1))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const backdropStyle: React.CSSProperties = {
        background: `hsla(0,0%,0%,${opacity})`,
    };

  return (
    <div style={containerStyle} className="box-content relative h-80 pt-24 h-screen bg-cover bg-center bg-no-repeat bg-image">
      <div style={backdropStyle} className='absolute inset-0 flex flex-col items-center justify-center text-white'>
        <h1 className='text-6xl text-center text-secondary-focus mx-auto max-w-screen-lg'>
          {PageTitle}
        </h1>
      </div>
    </div>
  );
};

export default GenericHero;
