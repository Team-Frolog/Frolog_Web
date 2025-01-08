import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

/** 도서 검색 > 리뷰 모음 중 리뷰가 없는 경우를 나타내는 컴포넌트 */
function NoReviewForBook() {
  return (
    <div
      id='no-review'
      className='flex w-full flex-col items-center gap-[20px]'
    >
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
