import React from 'react';
import Portal from '@/layouts/Portal';
import Logo from 'public/logo-title.svg';
import LoadingSpinner from './LoadingSpinner';

interface Props {
  theme: 'dark' | 'light';
}

function LoadingOverlay({ theme }: Props) {
  return (
    <Portal>
      <div
        className={`absolute left-0 top-0 z-100 flex h-dvh w-full flex-col items-center justify-center gap-[24px] bg-opacity-50 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      >
        <Logo />
        <LoadingSpinner theme={theme} />
      </div>
    </Portal>
  );
}

export default LoadingOverlay;
