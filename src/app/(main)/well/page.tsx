import WellHeader from '@/components/wellPage/WellHeader';
import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';

function WellPage() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-end'>
      <WellHeader />
      <div className='flex w-full flex-col items-center'>
        <Image src={IMAGES.frog.sitting} alt='frog' width={90} height={120} />
        <div className='h-[12px] w-full rounded-t-[20px] bg-gray-900' />
      </div>
    </div>
  );
}

export default WellPage;
