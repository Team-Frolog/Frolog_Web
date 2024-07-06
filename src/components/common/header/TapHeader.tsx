'use client';

import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

function TapHeader() {
  const router = useRouter();

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
          <button type='button' className='text-h_md_bold text-gray-500'>
            메모
          </button>
          <button type='button' className='text-h_md_bold text-white'>
            리뷰
          </button>
        </div>
        <div
          // className={`absolute bottom-0 h-[3px] w-[60px] bg-white transition-all ${click ? 'left-[84px]' : 'left-0'}`}
          className={`absolute bottom-0 right-0 h-[3px] w-[60px] bg-white transition-all`}
        />
      </div>
    </div>
  );
}

export default TapHeader;
