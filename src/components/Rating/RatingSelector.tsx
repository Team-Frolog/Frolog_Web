'use client';

import React from 'react';
import { ratingMessage } from '@/data/ui/ratingMessage';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { ReviewFormType } from '@/features/Review';
import Star from './Star';

interface Props {
  type: 'form' | 'default';
  rating?: number;
  setValue?: UseFormSetValue<ReviewFormType>;
  watch?: UseFormWatch<ReviewFormType>;
}

function RatingSelector({ type, rating, setValue, watch }: Props) {
  const currentRating = type === 'form' ? watch!('rating') : rating;

  const handleRating = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const star = e.currentTarget;
    const rect = star.getBoundingClientRect();
    const starHalf = rect.width / 2;
    const clickPosition = e.clientX - rect.left;

    const newRating = clickPosition < starHalf ? index + 0.5 : index + 1;

    setValue!('rating', newRating === 0.5 ? 1 : newRating);
  };

  return (
    <div className='flex w-full flex-col items-center justify-center gap-[8px] text-gray-800'>
      <h1 className='text-h_xl_bold'>{currentRating?.toFixed(1) || 3.5}</h1>
      <h4 className='text-body_lg'>
        {currentRating ? ratingMessage[currentRating] : '별점을 남겨주세요'}
      </h4>
      <div className='flex gap-[10px]'>
        {Array.from({ length: 5 }, (_, index) => {
          let num;
          const cur = currentRating || 3.5;
          if (index + 1 <= cur) {
            num = 1;
          } else if (index + 0.5 === cur) {
            num = 0.5;
          } else {
            num = 0;
          }
          return (
            <Star
              key={index}
              rating={num}
              size={40}
              onClick={
                type === 'form' ? (e) => handleRating(e, index) : undefined
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default RatingSelector;
