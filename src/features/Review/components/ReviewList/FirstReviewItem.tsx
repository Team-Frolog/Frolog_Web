'use client';

import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';

function FirstReviewItem() {
  return (
    <div className='review-item items-center text-center'>
      <h4 className='text-title_xl_bold'>
        축하해요!
        <br />첫 회독을 해냈어요!
      </h4>
      <Image
        src={IMAGES.frog.first_congrats}
        alt='congrats'
        width={120}
        height={119}
      />
      <span className='text-body_lg text-gray-600'>
        책은 읽을 때마다 새로운 발견을 선물해준다고 해요
        <br />
        재미있게 읽었다면 한 번 더 읽어보는 건 어떨까요?
      </span>
    </div>
  );
}

export default FirstReviewItem;
