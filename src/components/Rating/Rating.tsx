import React from 'react';
import { generateRatingStars, getRatingMsg } from '@/utils/star';
import { CATEGORY } from '@/constants/category';

interface Props {
  /** 별점 */
  rating: number | null;
  /** 별점별 멘트 렌더링 여부 */
  hasComment?: boolean;
  /** 카테고리 id */
  categoryId?: string;
  /** 별점 텍스트 클래스 */
  textClass?: string;
}

/** 별점과 별점별 멘트를 나타내는 컴포넌트
 * - read only 별점입니다.
 * - 별점 사이즈는 20px로 고정되어 있습니다.
 * - 도서 검색 아이템, 리뷰 모음, 리뷰 리스트, 도서 정보에 활용됩니다.
 */
function Rating({
  rating,
  categoryId,
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
          <span className={`text-body-lg text-category-text-${categoryId}`}>
            {getRatingMsg(rating!)}
          </span>
        )}
        <div className='flex gap-[4px]'>
          {generateRatingStars({
            curRating: rating || 0,
            size: 20,
            color: categoryId ? CATEGORY[categoryId].text : undefined,
          })}
        </div>
      </div>
    </div>
  );
}

export default Rating;
