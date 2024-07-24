'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { usePopUpActions } from '@/store/popUpStore';
import Rating from '@/components/Rating/Rating';
import TagSlider from '@/components/Tag/TagSlider';

function ReviewListItem() {
  const router = useRouter();
  const { changePopUpState } = usePopUpActions();

  return (
    <div className='review-item px-0 pb-0'>
      <div className='flex w-full flex-col gap-[12px]'>
        <div
          onClick={() => router.push('/well-book/9791193154250/review/82vKxJA')}
          className='flex w-full cursor-pointer flex-col gap-[12px] px-[24px]'
        >
          <div>
            <span className='rounded-[20px] bg-gray-800 px-[10px] py-[6px] text-body_sm_bold text-white'>
              첫번째 리뷰
            </span>
          </div>
          <Rating rating={4.5} textClass='text-h_lg_bold' />
          <h3 className='text-title_xl_bold'>
            예측불허의 긴장된 상태로 성적표를 처음 받아보았을 때를 잊을 수가
            없다.
          </h3>
        </div>

        <div className='flex-col-center w-full gap-[4px]'>
          <TagSlider type='pros' />
          <TagSlider type='cons' />
        </div>
      </div>
      <span className='px-[24px] text-body_md text-gray-600'>2024.02.07</span>

      <div className='flex w-full flex-col px-[24px]'>
        <hr className='border-[0.5px] border-gray-400' />
        <button
          type='button'
          onClick={() => changePopUpState('isOpenDeleteSheet', true)}
          className='py-[24px] text-body_lg text-error'
        >
          리뷰 삭제
        </button>
      </div>
    </div>
  );
}

export default ReviewListItem;
