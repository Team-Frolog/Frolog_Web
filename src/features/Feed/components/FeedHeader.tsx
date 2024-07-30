import Image from 'next/image';
import React from 'react';
import { ICONS } from '@/constants/icons';

function FeedHeader() {
  return (
    <div className='flex w-full justify-between px-page'>
      <div className='flex items-center gap-[8px]'>
        {/* <Image src='' alt='img' width={40} height={40} /> */}
        <div className='h-[40px] w-[40px] rounded-[50%] bg-gray-500' />
        <h5 className='text-body_lg_bold text-gray-600'>
          홍길동과고길동과도라에몽
        </h5>
      </div>
      <div className='flex items-center gap-[8px]'>
        <button
          type='button'
          className='rounded-[12px] bg-gray-200 px-[16px] py-[8px] text-body_sm_bold text-gray-600'
        >
          팔로우
        </button>
        <button type='button'>
          <Image src={ICONS.feed.menu} alt='menu' width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default FeedHeader;
