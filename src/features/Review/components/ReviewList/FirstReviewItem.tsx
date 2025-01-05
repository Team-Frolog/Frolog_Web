'use client';

import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';

/** 리뷰 리스트 내 첫 리뷰 작성 축하 컴포넌트 */
function FirstReviewItem() {
  return (
    <div className='review-item items-center text-center'>
      <h4 className='text-title-xl-bold'>
        이 책에 대한 첫 리뷰 작성!
        <br />
        축하드려요!
      </h4>
      <Image
        src={IMAGES.frog.first_congrats}
        alt='congrats'
        width={120}
        height={119}
      />
      <span className='text-body-lg text-gray-600'>
        우물에 소중한 한 권의 책이 더해졌어요 📚
      </span>
    </div>
  );
}

export default FirstReviewItem;
