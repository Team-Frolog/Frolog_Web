'use client';

import React from 'react';
import {
  UseFormClearErrors,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { ReviewFormType } from '@/features/Review';
import { generateRatingStars, getRatingMsg } from '@/utils/star';
import Star from './Star';

interface Props {
  type: 'form' | 'default';
  rating?: number | undefined;
  setValue?: UseFormSetValue<ReviewFormType>;
  watch?: UseFormWatch<ReviewFormType>;
  isError?: boolean;
  clearErrors?: UseFormClearErrors<ReviewFormType>;
  review_cnt?: number;
}

function RatingSelector({
  type,
  rating,
  setValue,
  watch,
  isError,
  clearErrors,
  review_cnt,
}: Props) {
  const currentRating = type === 'form' ? watch!('rating') : rating;

  const handleRating = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const star = e.currentTarget;
    const rect = star.getBoundingClientRect();
    const starHalf = rect.width / 2;
    const clickPosition = e.clientX - rect.left;

    const newRating = clickPosition < starHalf ? index + 0.5 : index + 1;

    clearErrors!('rating');
    setValue!('rating', newRating === 0.5 ? 1 : newRating, {
      shouldDirty: true,
    });
  };

  return (
    <div className='flex-col-center w-full justify-center gap-[8px] text-gray-800'>
      <div className='flex flex-col items-center'>
        {review_cnt && (
          <span className='text-body-sm text-gray-600'>
            총 {review_cnt}개의 리뷰
          </span>
        )}
        <h1
          className={`text-heading-xl-bold ${isError ? 'text-error' : 'text-gray-800'}`}
        >
          {currentRating?.toFixed(1) || '0.0'}
        </h1>
      </div>

      <h4
        className={`text-body-lg ${isError ? 'text-error' : 'text-gray-800'}`}
      >
        {currentRating
          ? getRatingMsg(currentRating)
          : type === 'default'
            ? '아직 리뷰가 없어요'
            : '별점을 남겨주세요'}
      </h4>
      {!currentRating && type === 'default' ? (
        <></>
      ) : (
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
                    defaultColor={
                      isError ? 'rgba(255, 100, 100, 0.5)' : undefined
                    }
                    onClick={
                      type === 'form'
                        ? (e) => handleRating(e, index)
                        : undefined
                    }
                  />
                );
              })}
        </div>
      )}
    </div>
  );
}

export default RatingSelector;
