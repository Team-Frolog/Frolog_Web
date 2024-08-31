import React from 'react';
import { MenuIcon } from 'public/icons';

function FeedHeader() {
  return (
    <div className='flex w-full justify-between px-page'>
      <div className='flex items-center gap-[8px]'>
        {/* <Image src='' alt='img' width={40} height={40} /> */}
        <div className='h-[40px] w-[40px] rounded-[50%] bg-gray-500' />
        <h5 className='text-body-lg-bold text-gray-600'>
          홍길동과고길동과도라에몽
        </h5>
      </div>
      <div className='flex items-center gap-[8px]'>
        <button
          type='button'
          className='text-body-sm-bold rounded-[12px] bg-gray-200 px-[16px] py-[8px] text-gray-600'
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
