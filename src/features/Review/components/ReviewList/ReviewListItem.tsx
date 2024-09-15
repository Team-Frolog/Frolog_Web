'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Rating from '@/components/Rating/Rating';
import TagSlider from '@/components/Tag/TagSlider';
import { GetReviewRes } from '@frolog/frolog-api';
import { formatDate } from '@/utils/format';
import DeleteButton from '@/components/ListItem/DeleteButton';

interface Props {
  index: number;
  reviewData: GetReviewRes;
  setReviewId: React.Dispatch<React.SetStateAction<string>>;
  onDelete: () => void;
}

function ReviewListItem({ reviewData, index, setReviewId, onDelete }: Props) {
  const router = useRouter();

  return (
    <div className='review-item px-0 pb-0'>
      <div className='flex w-full flex-col gap-[12px]'>
        <div
          onClick={() =>
            router.push(`/well-book/9791193154250/review/${reviewData.id}`)
          }
          className='flex w-full cursor-pointer flex-col gap-[12px] px-[24px]'
        >
          <div>
            <span className='rounded-[20px] bg-gray-800 px-[10px] py-[6px] text-body-sm-bold text-white'>
              {index}번째 리뷰
            </span>
          </div>
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
      <DeleteButton
        type='review'
        buttonText='리뷰 삭제'
        onDelete={onDelete}
        onClick={() => setReviewId(reviewData.id)}
      />
    </div>
  );
}

export default ReviewListItem;
