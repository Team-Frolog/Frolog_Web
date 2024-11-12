'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Rating from '@/components/Rating/Rating';
import TagSlider from '@/components/Tag/TagSlider';
import { GetReviewRes } from '@frolog/frolog-api';
import { formatDate } from '@/utils/date';
import DeleteButton from '@/components/ListItem/DeleteButton';
import { useUserId } from '@/store/sessionStore';

interface Props {
  reviewData: GetReviewRes;
  setReviewId: React.Dispatch<React.SetStateAction<string>>;
  onDelete: () => void;
  userId: string;
}

function ReviewListItem({ reviewData, setReviewId, onDelete, userId }: Props) {
  const router = useRouter();
  const sessionUserId = useUserId();
  const isRootUser = userId === sessionUserId;

  return (
    <div className={`review-item px-0 ${isRootUser && 'pb-0'}`}>
      <div className='flex w-full flex-col gap-[12px]'>
        <div
          onClick={() =>
            router.push(
              isRootUser
                ? `review/${reviewData.id}`
                : `/review/${reviewData.id}`
            )
          }
          className='flex w-full cursor-pointer flex-col gap-[12px] px-[24px]'
        >
          <Rating rating={reviewData.rating} textClass='text-heading-lg-bold' />
          <h3 className='break-all text-title-xl-bold'>{reviewData.title}</h3>
        </div>

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
