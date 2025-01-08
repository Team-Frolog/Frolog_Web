import Rating from '@/components/Rating/Rating';
import React from 'react';

interface Props {
  rating: number;
  category: string;
}

/** 도서 상세 > 리뷰 모음의 리뷰 아이템 헤더 부분 컴포넌트 */
function ReviewItemHeader({ rating, category }: Props) {
  return (
    <div className='pt-[30px]'>
      <div
        className={`relative flex w-full gap-[16px] rounded-t-[20px] bg-category-bg-${category} px-page py-[12px]`}
      >
        <div className={`tooltip-feed border-b-category-bg-${category}`} />
        <Rating
          rating={rating}
          textClass={`text-heading-lg-bold text-category-text-${category}`}
          categoryId={category}
          hasComment
        />
      </div>
    </div>
  );
}

export default ReviewItemHeader;
