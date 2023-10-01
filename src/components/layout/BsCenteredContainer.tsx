import React, { ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
  whiteBg?: boolean;
  extraClasses?: string;
}

const BsCenteredContainer: React.FC<IContainerProps> = (
  { children, 
    whiteBg = false,
    extraClasses = ""
  }
  ) => {
  return (
    <div className={"mx-auto max-w-screen-lg " + extraClasses + (whiteBg ? " bg-white shadow-md p-4 rounded-lg" : "")}>
      {children}
    </div>
  );
}

export default BsCenteredContainer;

