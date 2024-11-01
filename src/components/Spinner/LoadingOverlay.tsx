import React from 'react';
import Logo from 'public/logo-title.svg';
import LoadingSpinner from './LoadingSpinner';

interface Props {
  theme: 'dark' | 'light';
}

function LoadingOverlay({ theme }: Props) {
  return (
    <div
      className={`absolute left-0 top-0 z-70 flex h-dvh w-full flex-col items-center justify-center gap-[24px] bg-opacity-50 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <Logo />
      <LoadingSpinner theme={theme} />
    </div>
  );
}

export default LoadingOverlay;
