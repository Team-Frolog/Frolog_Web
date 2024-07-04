import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import GuideChat from '../common/GuideChat';

function FrogOnBook() {
  return (
    <div className='flex flex-col items-center'>
      <GuideChat />
      <Image src={IMAGES.frog.sitting} alt='frog' width={90} height={120} />
    </div>
  );
}

export default FrogOnBook;
