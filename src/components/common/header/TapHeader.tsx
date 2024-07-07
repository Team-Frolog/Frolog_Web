'use client';

import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

function TapHeader() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='sticky left-0 top-0 block h-fit w-full gap-3 bg-gray-900 p-[24px] pb-[10px] text-white'>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => router.back()}
      >
        <Image
          src={ICONS.common.back}
          alt='backBtn'
          width={12}
          height={20}
          priority
        />
      </button>
      <div className='relative w-fit pb-[5px]'>
        <div className='flex gap-[24px]'>
          <button
            type='button'
            onClick={() => router.replace('/memo')}
            className={`text-h_md_bold ${pathname === '/memo' ? 'text-white' : 'text-gray-500'}`}
          >
            메모
          </button>
          <button
            type='button'
            onClick={() => router.replace('/new-review')}
            className={`text-h_md_bold ${pathname === '/new-review' ? 'text-white' : 'text-gray-500'}`}
          >
            리뷰 작성
          </button>
        </div>
        <div
          className={`absolute bottom-0 h-[3px] bg-white transition-all ${pathname === '/new-review' ? 'left-[84px] w-[127px]' : 'left-0 w-[60px]'}`}
          // className='absolute bottom-0 right-0 h-[3px] w-[60px] bg-white transition-all'
        />
      </div>
    </div>
  );
}

export default TapHeader;
