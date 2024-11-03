'use client';

import BackButton from '@/components/Button/BackButton';
import React from 'react';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  display?: 'flex' | 'block';
}

function ResponsiveHeaderLayout({
  onClick,
  children,
  display = 'flex',
}: Props) {
  return (
    <header
      id='header'
      className={`duration-50 h-fit w-full gap-3 bg-gray-900 p-[24px] text-white transition-all ${display}`}
      style={{ paddingBottom: '10px' }}
    >
      <BackButton fill='#B3B6C5' onClick={onClick} />
      {children}
    </header>
  );
}

export default ResponsiveHeaderLayout;
