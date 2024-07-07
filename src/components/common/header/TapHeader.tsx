'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import BackIcon from 'public/icons/common/back/back.svg';

function TapHeader() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      id='header'
      className='sticky left-0 top-0 z-50 block h-fit w-full gap-3 bg-gray-900 p-[24px] pb-[10px] text-white transition-all duration-200'
    >
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => router.back()}
      >
        <BackIcon id='icon' fill='#B3B6C5' />
      </button>
      <div className='relative w-fit pb-[5px]'>
        <div className='flex gap-[24px]'>
          <button
            id={pathname === '/memo' ? 'tap' : undefined}
            type='button'
            onClick={() => router.replace('/memo')}
            className={`text-h_md_bold ${pathname === '/memo' ? 'text-white' : 'text-gray-500'}`}
          >
            메모
          </button>
          <button
            id={pathname === '/new-review' ? 'tap' : undefined}
            type='button'
            onClick={() => router.replace('/new-review')}
            className={`text-h_md_bold ${pathname === '/new-review' ? 'text-white' : 'text-gray-500'}`}
          >
            리뷰
          </button>
        </div>
        <div
          id='bar'
          className={`absolute bottom-0 h-[3px] w-[60px] bg-white transition-all ${pathname === '/new-review' ? 'left-[84px]' : 'left-0'}`}
        />
      </div>
    </div>
  );
}

export default TapHeader;
