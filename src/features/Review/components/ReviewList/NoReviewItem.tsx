import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';

function NoReviewItem() {
  return (
    <div className='review-item items-center text-center'>
      <h3 className='text-body_xl_bold'>
        책을 다 읽으셨으면 이제 리뷰를 써보세요!
      </h3>
      <Image
        src={IMAGES.frog.withPen}
        alt='with pen'
        width={120}
        height={120}
      />
    </div>
  );
}

export default NoReviewItem;
