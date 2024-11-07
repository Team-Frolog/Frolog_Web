import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';

interface Props {
  imageUrl?: string;
}

function Book({ imageUrl }: Props) {
  return (
    <div className='relative z-10'>
      <Image
        src={IMAGES.book.skin}
        alt='skin'
        width={161}
        height={245}
        className='absolute -left-[9px] -top-[14px] -z-10 h-[245px] w-full'
      />
      <Image
        src={imageUrl || IMAGES.book.cover}
        alt='book cover'
        width={160}
        height={230}
        className='h-[230px] w-auto'
      />
    </div>
  );
}

export default Book;
