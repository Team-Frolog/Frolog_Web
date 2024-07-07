'use client';

import React, { useState } from 'react';
import { ratingMessage } from '@/data/ratingMessage';
import Star from './Star';

function RatingSelector() {
  const [rating, setRating] = useState<number | null>(null);

  const handleRating = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const star = e.currentTarget;
    const rect = star.getBoundingClientRect();
    const starHalf = rect.width / 2;
    const clickPosition = e.clientX - rect.left;

    const newRating = clickPosition < starHalf ? index + 0.5 : index + 1;

    setRating(newRating === 0.5 ? 1 : newRating);
  };

  return (
    <div className='flex w-full flex-col items-center justify-center gap-[8px] text-gray-800'>
      <h1 className='text-h_xl_bold'>{rating?.toFixed(1) || 3.5}</h1>
      <h4 className='text-body_lg'>
        {rating ? ratingMessage[rating] : '별점을 남겨주세요'}
      </h4>
      <div className='flex gap-[10px]'>
        {Array.from({ length: 5 }, (_, index) => {
          let num;
          const currentRating = rating || 3.5;
          if (index + 1 <= currentRating) {
            num = 1;
          } else if (index + 0.5 === currentRating) {
            num = 0.5;
          } else {
            num = 0;
          }
          return (
            <Star
              key={index}
              rating={num}
              size={40}
              onClick={(e) => handleRating(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RatingSelector;
