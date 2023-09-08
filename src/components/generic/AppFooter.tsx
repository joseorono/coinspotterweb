import React from 'react';

const AppFooter: React.FC = () => {
  return (
    <div className="relative flex py-5 px-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">Copyright &copy; {new Date().getFullYear()} CoinSpotter Team - All Rights Reserved.</span>
        <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default AppFooter;