'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BackButton from '../Button/BackButton';

function BackHeader() {
  const router = useRouter();
  return (
    <header className='header-sticky duration-50 z-70 flex justify-between border-b-[0.5px] border-gray-400 bg-white p-[24px] transition-all'>
      <BackButton onClick={() => router.back()} fill='#727484' />
    </header>
  );
}

export default BackHeader;
