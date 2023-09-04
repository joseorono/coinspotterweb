import React, { FC } from 'react';

interface GenericHeroProps {
  PageTitle: string;
  bgImg?: string;
}

const GenericHero: FC<GenericHeroProps> = ({ PageTitle, bgImg }) => {
    const containerStyle: React.CSSProperties = {
        background: bgImg ? `url(${bgImg})` : `hsl(var(--b1))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

  return (
    <div style={containerStyle} className="max-h-[400px] h-screen flex items-center justify-center">
      <div className='text-6xl text-center text-secondary-focus'>
        {PageTitle}
      </div>
    </div>
  );
};

export default GenericHero;