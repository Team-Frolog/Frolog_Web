'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { usePopUpActions } from '@/store/popUpStore';
import Rating from '@/components/Rating/Rating';
import TagSlider from '@/components/Tag/TagSlider';
import { GetReviewRes } from '@frolog/frolog-api';
import { formatDate } from '@/utils/format';

interface Props {
  index: number;
  reviewData: GetReviewRes;
  setReviewId: React.Dispatch<React.SetStateAction<string>>;
}

function ReviewListItem({ reviewData, index, setReviewId }: Props) {
  const router = useRouter();
  const { changePopUpState } = usePopUpActions();

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
            <span className='rounded-[20px] bg-gray-800 px-[10px] py-[6px] text-body_sm_bold text-white'>
              {index}번째 리뷰
            </span>
          </div>
          <Rating rating={reviewData.rating} textClass='text-h_lg_bold' />
          <h3 className='break-all text-title_xl_bold'>{reviewData.title}</h3>
        </div>

        <div className='flex-col-center w-full gap-[8px]'>
          <TagSlider type='pros' tagKeys={reviewData.tags_pos} />
          <TagSlider type='cons' tagKeys={reviewData.tags_neg} />
        </div>
      </div>
      <span className='px-[24px] text-body_md text-gray-600'>
        {formatDate(reviewData.date)}{' '}
        {reviewData.date !== reviewData.edit && '(수정됨)'}
      </span>

      <div className='flex w-full flex-col px-[24px]'>
        <hr className='border-[0.5px] border-gray-400' />
        <button
          type='button'
          onClick={() => {
            setReviewId(reviewData.id);
            changePopUpState('isOpenDeleteSheet', true);
          }}
          className='py-[24px] text-body_lg text-error'
        >
          리뷰 삭제
        </button>
      </div>
    </div>
  );
}

export default ReviewListItem;
