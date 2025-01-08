import React from 'react';
import Portal from '@/layouts/Portal';
import Logo from 'public/logo-title.svg';
import LoadingSpinner from './LoadingSpinner';

interface Props {
  theme: 'dark' | 'light' | 'transparent';
}

/** 프롤로그 로고, 스피너가 포함된 로딩 화면
 * @param theme - dark, light, transparent
 */
function LoadingOverlay({ theme }: Props) {
  return (
    <Portal>
      <div
        className={`safe-screen absolute left-0 top-0 z-100 flex w-full flex-col items-center justify-center gap-[24px] ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} ${theme === 'transparent' ? 'bg-opacity-0' : 'bg-opacity-50'}`}
      >
        <Logo />
        <LoadingSpinner theme={theme} />
      </div>
    </Portal>
  );
}

export default LoadingOverlay;
