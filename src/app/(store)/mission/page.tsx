import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';

export const metadata: Metadata = {
  title: '미션',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

function MissionPage() {
  return (
    <>
      <div className='flex w-full flex-col gap-[20px]'>
        <div className='flex flex-col gap-[4px] rounded-[20px] bg-[#FF8BCA] px-[20px] pt-[20px] text-white'>
          <h5 className='text-title-xl-bold'>읽는 중 책 추가</h5>
          <div className='flex flex-col'>
            <span className='text-body-lg-bold'>1일 최대 20p</span>
            <span className='self-end text-body-lg'>1회 10p</span>
            <Image
              src={IMAGES.frog.add.reading}
              alt='reading book frog'
              width={127}
              height={62}
              className='self-end pt-[16px]'
            />
          </div>
        </div>
        <div className='flex flex-col gap-[4px] rounded-[20px] bg-[#85DCFF] px-[20px] pt-[20px] text-white'>
          <h5 className='text-title-xl-bold'>다 읽은 책 추가</h5>
          <div className='flex flex-col'>
            <span className='text-body-lg-bold'>1일 최대 20p</span>
            <span className='self-end text-body-lg'>1회 20p</span>
            <Image
              src={IMAGES.frog.add.done}
              alt='read book frog'
              width={127}
              height={62}
              className='self-end pt-[16px]'
            />
          </div>
        </div>
      </div>
      <Image
        src={IMAGES.frog.mission_frog}
        alt='mission frog'
        width={197}
        height={196}
      />
    </>
  );
}

export default MissionPage;
