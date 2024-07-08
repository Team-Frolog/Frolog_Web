'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import BackIcon from 'public/icons/common/back/back.svg';
import { PAGES } from '@/constants/page';

function TapHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split('/')[2];

  return (
    <div
      id='header'
      className='duration-50 sticky left-0 top-0 z-30 block h-fit w-full gap-3 bg-gray-900 p-[24px] pb-[10px] text-white transition-all'
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
            id={pathname.includes('memo') ? 'tap' : undefined}
            type='button'
            onClick={() => router.replace(`${PAGES.WELL_BOOK}/${id}/memo`)}
            className={`text-h_md_bold ${pathname.includes('memo') ? 'text-white' : 'text-gray-500'}`}
          >
            메모
          </button>
          <button
            id={pathname.includes('review') ? 'tap' : undefined}
            type='button'
            onClick={() => router.replace(`${PAGES.WELL_BOOK}/${id}/review`)}
            className={`text-h_md_bold ${pathname.includes('review') ? 'text-white' : 'text-gray-500'}`}
          >
            리뷰
          </button>
        </div>
        <div
          id='bar'
          className={`absolute bottom-0 h-[3px] w-[60px] bg-white transition-all ${pathname.includes('review') ? 'left-[84px]' : 'left-0'}`}
        />
      </div>
    </div>
  );
}

export default TapHeader;
