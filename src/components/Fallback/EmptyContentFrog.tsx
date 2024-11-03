import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';

interface Props {
  title: string;
  type?: 'with pen' | 'dot';
}

function EmptyContentFrog({ title, type = 'with pen' }: Props) {
  return (
    <div className='review-item flex-1 items-center justify-center bg-white text-center'>
      <h3 className='text-body-xl-bold'>{title}</h3>
      {type === 'with pen' ? (
        <Image
          src={IMAGES.frog.fallback.withPen}
          alt='empty frog'
          width={120}
          height={120}
        />
      ) : (
        <Image
          src={IMAGES.frog.fallback.empty_dot}
          alt='empty frog'
          width={120}
          height={120}
        />
      )}
    </div>
  );
}

export default EmptyContentFrog;
