import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

function Book() {
  return (
    <div className='relative z-10'>
      <Image src={IMAGES.book.skin} alt='skin' width={161} height={248} />
      <div className='absolute left-[9px] top-[14px] h-[233px] w-[160px] bg-main'>
        book cover
      </div>
    </div>
  );
}

export default Book;
