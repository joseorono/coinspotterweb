import React, { FC } from 'react';

interface GenericHeroProps {
  PageTitle: string;
  bgImg?: string;
}

const GenericHero: FC<GenericHeroProps> = ({ PageTitle, bgImg }) => {
  const containerStyle: React.CSSProperties = {
    background: bgImg ? `url(${bgImg})` : '#D3DADA',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={containerStyle} className="max-h-450 h-screen flex items-center justify-center">
      <div className='text-4xl text-center text-white'>
        <h1>{PageTitle}</h1>
      </div>
    </div>
  );
};

export default GenericHero;