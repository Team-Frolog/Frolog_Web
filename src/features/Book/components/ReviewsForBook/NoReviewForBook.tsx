import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

function NoReviewForBook() {
  return (
    <div className='safe-bottom flex w-full flex-col items-center gap-[20px] pb-[36px]'>
      <h3 className='text-center text-title-xl-bold text-gray-800'>
        아직 이 책에 대한
        <br />
        리뷰가 없어요
      </h3>
      <Image
        src={IMAGES.frog.fallback.no_review}
        alt='no-review'
        width={126}
        height={186}
      />
      <p className='text-center text-body-lg text-gray-600'>
        &lsquo;책 추가하기&rsquo;를 통해 첫 리뷰를 작성하고
        <br />
        독서 경험을 나눠보세요! 📚
      </p>
    </div>
  );
}

export default NoReviewForBook;
