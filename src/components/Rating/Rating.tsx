import React from 'react';
import { generateRatingStars, getRatingMsg } from '@/utils/star';
import { CATEGORY } from '@/constants/category';

interface Props {
  rating: number | null;
  hasComment?: boolean;
  category?: string;
  textClass?: string;
}

function Rating({
  rating,
  category,
  hasComment = false,
  textClass = 'text-body-xl-bold text-gray-800',
}: Props) {
  return (
    <div className='flex w-full items-center gap-[8px]'>
      <span className={`${!rating && 'text-gray-600'} ${textClass}`}>
        {rating ? rating.toFixed(1) : '0.0'}
      </span>
      <div className='flex flex-col gap-[4px]'>
        {hasComment && (
          <span className={`text-body-lg text-category-text-${category}`}>
            {getRatingMsg(rating!)}
          </span>
        )}
        <div className='flex gap-[4px]'>
          {generateRatingStars(
            rating || 0,
            20,
            CATEGORY[category || 'novel'].text
          )}
        </div>
      </div>
    </div>
  );
}

export default Rating;
