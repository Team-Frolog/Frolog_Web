'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import BackButton from '../Button/BackButton';

function StoreHeader() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className='duration-50 block h-fit w-full gap-3 bg-white p-[24px] transition-all'>
      <BackButton fill='#727384' onClick={() => router.back()} />
      <div className='flex justify-between items-center'>
        <div className='relative w-fit pb-[5px]'>
          <div className='flex gap-[24px]'>
            <button
              type='button'
              onClick={() => router.replace('/store')}
              className='text-heading-md-bold'
              style={{
                color: pathname.includes('store') ? '#313239' : '#B3B6C4',
              }}
            >
              상점
            </button>
            <button
              type='button'
              onClick={() => router.replace('/mission')}
              className='text-heading-md-bold'
              style={{
                color: pathname.includes('mission') ? '#313239' : '#B3B6C4',
              }}
            >
              미션
            </button>
          </div>
          <div
            id='bar'
            className={`absolute bottom-0 h-[3px] w-[60px] bg-gray-800 transition-all ${pathname.includes('mission') ? 'left-[84px]' : 'left-0'}`}
          />
        </div>
        <div className='rounded-[50px] bg-gray-300 h-fit px-[14px] py-[8px] text-title-lg-bold'>
          1,000 P
        </div>
      </div>
    </header>
  );
}

export default StoreHeader;
