import { IMAGES } from '@/constants/images';
import { useBookImage } from '@/features/Book/hooks/useBookImage';
import { getImageSrc } from '@/utils/getImageSrc';
import Image from 'next/image';
import React from 'react';

interface Props {
  isbn?: string;
}

function Book({ isbn }: Props) {
  const { bookCover, setDefault } = useBookImage(getImageSrc(isbn, 'book'));

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
        src={bookCover || IMAGES.book.cover}
        alt='book cover'
        onError={() => setDefault()}
        width={160}
        height={230}
        className='h-[230px] w-auto'
      />
    </div>
  );
}

export default Book;
