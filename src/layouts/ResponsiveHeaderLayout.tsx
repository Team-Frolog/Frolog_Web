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
      className='duration-50 header-sticky block h-fit gap-3 bg-gray-900 p-[24px] text-white transition-all'
      style={{ paddingBottom: '10px' }}
    >
      <BackButton fill='#B3B6C5' onClick={onClick} />
      {children}
    </div>
  );
}

export default ResponsiveHeaderLayout;
