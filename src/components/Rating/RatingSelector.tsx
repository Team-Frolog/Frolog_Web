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
import WithConditionalRendering from '../HOC/WithConditionalRendering';

interface Props {
  /** 컴포넌트 사용처 */
  type: 'form' | 'default';
  /** 별점 값 */
  rating?: number;
  /** 에러 여부 */
  isError?: boolean;
  /** 리뷰 개수 */
  review_cnt?: number;
  /** 컴포넌트 전체에 적용될 추가 onClick */
  onClick?: () => void;
  setValue?: UseFormSetValue<ReviewFormType>;
  watch?: UseFormWatch<ReviewFormType>;
  clearErrors?: UseFormClearErrors<ReviewFormType>;
}

/** 별점 선택 컴포넌트
 * - type='form'인 경우 react-hook-form 관련 메서드를 제공해야 하며, 별점을 선택할 수 있습니다.
 * - type='default'인 경우 read-only로 동작합니다.
 * - 별점 사이즈는 40px로 고정되어 있습니다.
 */
function RatingSelector({
  type,
  rating,
  setValue,
  watch,
  isError,
  clearErrors,
  review_cnt,
  onClick,
}: Props) {
  const currentRating = type === 'form' ? watch!('rating') : rating;

  /** 별점 선택을 핸들링하는 함수 */
  const handleRating = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const star = e.currentTarget;
    const rect = star.getBoundingClientRect();
    const starHalf = rect.width / 2;
    const clickPosition = e.clientX - rect.left;

    const newRating = clickPosition < starHalf ? index + 0.5 : index + 1;

    clearErrors?.('rating');
    setValue?.('rating', newRating === 0.5 ? 1 : newRating, {
      shouldDirty: true,
    });
  };

  /** type에 따라 별을 렌더링하는 함수
   * - form인 경우 선택 가능한 별 렌더링
   * - default인 경우 read only 별 렌더링
   */
  const renderStars = () => {
    if (type === 'default') {
      return generateRatingStars({ curRating: rating || 0, size: 40 });
    }
    return Array.from({ length: 5 }, (_, index) => {
      let starRating: 0 | 0.5 | 1;
      const cur = currentRating || 0;
      if (index + 1 <= cur) {
        starRating = 1;
      } else if (index + 0.5 === cur) {
        starRating = 0.5;
      } else {
        starRating = 0;
      }
      return (
        <Star
          key={index}
          rating={starRating}
          size={40}
          defaultColor={isError ? 'rgba(255, 100, 100, 0.5)' : ''}
          onClick={type === 'form' ? (e) => handleRating(e, index) : undefined}
        />
      );
    });
  };

  return (
    <div
      onClick={onClick}
      className='flex-col-center w-full justify-center gap-[8px] text-gray-800'
    >
      <div className='flex-column items-center'>
        <WithConditionalRendering condition={review_cnt !== undefined}>
          <span className='text-body-sm text-gray-600'>
            총 {review_cnt}개의 리뷰
          </span>
        </WithConditionalRendering>

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
      <WithConditionalRendering
        condition={!!currentRating || type !== 'default'}
      >
        <div className='flex gap-[10px]'>{renderStars()}</div>
      </WithConditionalRendering>
    </div>
  );
}

export default RatingSelector;
