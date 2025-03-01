import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

function BookInfoSkeleton() {
  return (
    <div
      id='book-info'
      className='flex-col-center relative w-full gap-[20px] bg-white py-[24px] text-gray-800'
    >
      <Image
        src={IMAGES.book.background}
        alt='bg'
        width={390}
        height={182}
        className='absolute left-0 top-0 z-0 w-full'
      />
      <div className='relative z-10'>
        <Image src={IMAGES.book.skin} alt='skin' width={161} height={248} />
        <div className='skeleton-animation absolute left-[9px] top-[14px] h-[233px] w-[160px] bg-gray-400' />
      </div>
      <div className='skeleton-animation flex-col-center gap-[4px]'>
        <span className='skeleton-text h-[30px] w-[140px]' />
        <span className='skeleton-text w-[100px]' />
      </div>
    </div>
  );
}

export default BookInfoSkeleton;
