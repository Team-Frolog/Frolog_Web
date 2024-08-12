import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';

interface Props {
  title: string;
}

function EmptyContentFrog({ title }: Props) {
  return (
    <div className='review-item flex-1 items-center justify-center bg-white text-center'>
      <h3 className='text-body_xl_bold'>{title}</h3>
      <Image
        src={IMAGES.frog.withPen}
        alt='with pen'
        width={120}
        height={120}
      />
    </div>
  );
}

export default EmptyContentFrog;
