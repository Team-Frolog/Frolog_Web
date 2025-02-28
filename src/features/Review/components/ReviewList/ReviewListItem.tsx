'use client';

import React from 'react';
import Rating from '@/components/Rating/Rating';
import TagSlider from '@/components/Tag/TagSlider';
import { GetReviewRes } from '@frolog/frolog-api';
import { formatDate } from '@/utils/date';
import DeleteButton from '@/components/Button/DeleteButton';
import { useUserId } from '@/store/sessionStore';
import CustomLink from '@/components/Link/CustomLink';
import { getPath } from '@/utils/getPath';

interface Props {
  /** 리뷰 데이터 객체 */
  reviewData: GetReviewRes;
  /** 삭제 시 삭제할 리뷰 id setter */
  setReviewId: React.Dispatch<React.SetStateAction<string>>;
  /** 리뷰 삭제 핸들러 */
  onDelete: () => void;
  /** 유저 id */
  userId: string;
}

/** 리뷰 리스트 아이템 컴포넌트 */
function ReviewListItem({ reviewData, setReviewId, onDelete, userId }: Props) {
  const sessionUserId = useUserId();
  const isRootUser = userId === sessionUserId;

  return (
    <div className={`review-item px-0 ${isRootUser && 'pb-0'}`}>
      <div className='flex w-full flex-col gap-[12px]'>
        <CustomLink
          prefetch
          href={
            isRootUser
              ? `review/${reviewData.id}`
              : getPath.review(reviewData.id)
          }
          className='flex w-full cursor-pointer flex-col gap-[12px] px-[24px]'
        >
          <Rating rating={reviewData.rating} textClass='text-heading-lg-bold' />
          <h3 className='break-all text-body-xl-bold'>{reviewData.title}</h3>
        </CustomLink>

        <div className='flex-col-center w-full gap-[8px]'>
          <TagSlider type='pros' tagKeys={reviewData.tags_pos} />
          <TagSlider type='cons' tagKeys={reviewData.tags_neg} />
        </div>
      </div>
      <span className='px-[24px] text-body-md text-gray-600'>
        {formatDate(reviewData.date)}{' '}
        {reviewData.date !== reviewData.edit && '(수정됨)'}
      </span>
      {isRootUser && (
        <DeleteButton
          type='review'
          buttonText='리뷰 삭제'
          onDelete={onDelete}
          onClick={() => setReviewId(reviewData.id)}
        />
      )}
    </div>
  );
}

export default ReviewListItem;
