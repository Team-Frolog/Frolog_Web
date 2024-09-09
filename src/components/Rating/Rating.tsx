import React from 'react';
import { generateRatingStars } from '@/utils/star';
import { CATEGORY } from '@/constants/category';

interface Props {
  rating: number | null;
  textClass?: string;
}

function Rating({
  rating,
  textClass = 'text-body-xl-bold text-gray-800',
}: Props) {
  return (
    <div className='flex w-full items-center gap-[8px]'>
      <span className={`${!rating && 'text-gray-600'} ${textClass}`}>
        {rating ? rating.toFixed(1) : '0.0'}
      </span>
      <div className='flex gap-[4px]'>
        {generateRatingStars(rating || 0, 20, CATEGORY.novel.text)}
      </div>
    </div>
  );
}

export default Rating;
