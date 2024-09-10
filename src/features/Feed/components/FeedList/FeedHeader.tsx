import React from 'react';
import { MenuIcon } from 'public/icons';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';

function FeedHeader() {
  return (
    <div className='flex w-full justify-between px-page'>
      <div className='flex items-center gap-[8px]'>
        <Image
          src={IMAGES.default_profile}
          alt='profile image'
          width={40}
          height={40}
          className='rounded-[50%]'
        />
        <h5 className='text-body-lg-bold text-gray-600'>
          홍길동과고길동과도라에몽
        </h5>
      </div>
      <div className='flex items-center gap-[8px]'>
        <button
          type='button'
          className='rounded-[12px] border border-gray-400 bg-white px-[16px] py-[8px] text-body-sm-bold text-gray-600'
        >
          팔로우
        </button>
        <button type='button'>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default FeedHeader;
