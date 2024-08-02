import React from 'react';
import { generateRatingStars } from '@/utils/star';

interface Props {
  rating: number | null;
  textClass?: string;
}

function Rating({ rating, textClass = 'text-body_xl_bold' }: Props) {
  return (
    <div className='flex w-full items-center gap-[8px]'>
      <span
        className={`${rating ? 'text-gray-800' : 'text-gray-600'} ${textClass}`}
      >
        {rating ? rating.toFixed(1) : '0.0'}
      </span>
      <div className='flex gap-[4px]'>
        {generateRatingStars(rating || 0, 20)}
      </div>
    </div>
  );
}

export default Rating;
