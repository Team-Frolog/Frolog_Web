import BackButton from '@/components/Button/BackButton';
import React from 'react';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

function ResponsiveHeaderLayout({ onClick, children }: Props) {
  return (
    <div
      id='header'
      className='duration-50 sticky left-0 top-0 z-50 block h-fit w-full gap-3 bg-gray-900 p-[24px] pb-[10px] text-white transition-all'
    >
      <BackButton fill='#B3B6C5' onClick={onClick} />
      {children}
    </div>
  );
}

export default ResponsiveHeaderLayout;
