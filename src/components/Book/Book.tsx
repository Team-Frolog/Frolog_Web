import { IMAGES } from '@/constants/images';
import { getImageSrc } from '@/utils/getImageSrc';
import Image from 'next/image';
import React from 'react';

interface Props {
  imageSrc?: string;
}

function Book({ imageSrc }: Props) {
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
        src={imageSrc ? getImageSrc(imageSrc, 'book')! : IMAGES.book.cover}
        alt='book cover'
        width={160}
        height={230}
        className='h-[230px] w-auto bg-main'
      />
    </div>
  );
}

export default Book;
