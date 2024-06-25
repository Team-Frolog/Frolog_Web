import React, { useCallback } from 'react';
import { ICONS } from '@/constants/icons';
import Image from 'next/image';

interface Props {
  rating: number;
}

function Rating({ rating }: Props) {
  const generateRatingStars = useCallback((rate: number) => {
    const stars = [];
    let currentRating = rate;
    for (let i = 0; i < 5; i += 1) {
      if (currentRating >= 1) {
        stars.push(
          <Image
            src={ICONS.common.star.full}
            alt='star'
            key={i}
            width={20}
            height={20}
          />
        );
        currentRating -= 1;
      } else if (currentRating > 0) {
        stars.push(
          <Image
            src={ICONS.common.star.half}
            alt='half star'
            key={i}
            width={20}
            height={20}
          />
        );
        currentRating = 0;
      } else {
        stars.push(
          <Image
            src={ICONS.common.star.default}
            alt='no star'
            key={i}
            width={20}
            height={20}
          />
        );
      }
    }
    return stars;
  }, []);

  return (
    <div className='flex w-full items-center gap-[8px]'>
      <span className='text-body_xl_bold text-gray-800'>
        {rating.toFixed(1)}
      </span>
      <div className='flex gap-[4px]'>{generateRatingStars(rating)}</div>
    </div>
  );
}

export default Rating;
