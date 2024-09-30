import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';

function UserStatistics() {
  return (
    <div className='flex w-full flex-col gap-[16px] px-page'>
      <div className='flex w-full items-center gap-[28px]'>
        <Image
          src={IMAGES.default_profile}
          alt='profile image'
          width={76}
          height={76}
        />
        <div className='flex flex-1 justify-around'>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-title-xl-bold text-gray-800'>9999</h3>
            <span className='text-body-sm text-gray-600'>최고높이</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-title-xl-bold text-gray-800'>1만</h3>
            <span className='text-body-sm text-gray-600'>팔로워</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-title-xl-bold text-gray-800'>1234</h3>
            <span className='text-body-sm text-gray-600'>팔로잉</span>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col gap-[4px] text-gray-800'>
        <h5 className='text-body-lg-bold'>홍길동과고길동과도라에몽</h5>
        <p className='text-body-md'>오늘 밤, 우물에서 개구리가 사라진다 해도</p>
      </div>
    </div>
  );
}

export default UserStatistics;
