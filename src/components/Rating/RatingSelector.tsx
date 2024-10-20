'use client';

import React from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { ReviewFormType } from '@/features/Review';
import { generateRatingStars, getRatingMsg } from '@/utils/star';
import Star from './Star';

interface Props {
  type: 'form' | 'default';
  rating?: number | undefined;
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

    setValue!('rating', newRating === 0.5 ? 1 : newRating, {
      shouldDirty: true,
    });
  };

  return (
    <div className='flex-col-center w-full justify-center gap-[8px] text-gray-800'>
      <h1 className='text-heading-xl-bold'>
        {currentRating?.toFixed(1) || '0.0'}
      </h1>
      <h4 className='text-body-lg'>
        {currentRating ? getRatingMsg(currentRating) : '별점을 남겨주세요'}
      </h4>
      <div className='flex gap-[10px]'>
        {type === 'default'
          ? generateRatingStars(rating || 0, 40)
          : Array.from({ length: 5 }, (_, index) => {
              let num;
              const cur = currentRating || 0;
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
