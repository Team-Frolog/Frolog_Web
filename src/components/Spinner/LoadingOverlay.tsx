import React from 'react';
import Logo from 'public/logo-title.svg';
import LoadingSpinner from './LoadingSpinner';

function LoadingOverlay() {
  return (
    <div className='absolute left-0 top-0 flex h-dvh w-full flex-col items-center justify-center gap-[24px] bg-gray-900 bg-opacity-50'>
      <Logo />
      <LoadingSpinner />
    </div>
  );
}

export default LoadingOverlay;
