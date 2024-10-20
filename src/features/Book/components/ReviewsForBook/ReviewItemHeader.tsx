import Rating from '@/components/Rating/Rating';
import React from 'react';

interface Props {
  rating: number;
  category: string;
}

function ReviewItemHeader({ rating, category }: Props) {
  return (
    <div className='pt-[30px]'>
      <div
        className={`tooltip-feed relative flex w-full gap-[16px] rounded-t-[20px] bg-category-bg-${category} px-page py-[12px] after:border-b-category-bg-${category}`}
      >
        <Rating
          rating={rating}
          textClass={`text-heading-lg-bold text-category-text-${category}`}
          category={category}
          hasComment
        />
      </div>
    </div>
  );
}

export default ReviewItemHeader;
