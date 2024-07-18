'use client';

import React from 'react';
import { usePopUpActions } from '@/store/popUpStore';
import Rating from '../rating/Rating';
import TagSlider from './TagSlider';

function ReviewListItem() {
  const { changePopUpState } = usePopUpActions();

  return (
    <div className='flex w-full flex-col gap-[20px] rounded-[20px] bg-white px-[24px] pt-[36px]'>
      <div className='flex w-full cursor-pointer flex-col gap-[12px] text-gray-800'>
        <div>
          <span className='rounded-[20px] bg-gray-800 px-[10px] py-[6px] text-body_sm_bold text-white'>
            1회차 독서
          </span>
        </div>
        <Rating rating={4.5} textClass='text-h_lg_bold' />
        <h3 className='text-title_xl_bold'>
          예측불허의 긴장된 상태로 성적표를 처음 받아보았을 때를 잊을 수가 없다.
        </h3>
        <div className='flex w-full flex-col gap-[4px]'>
          <TagSlider />
          <TagSlider />
        </div>
      </div>
      <span className='text-body_md text-gray-600'>2024.02.07</span>

      <div className='flex w-full flex-col'>
        <hr className='border-[0.5px] border-gray-400' />
        <button
          type='button'
          onClick={() => changePopUpState('isOpenDeleteSheet', true)}
          className='py-[20px] text-body_lg text-error'
        >
          리뷰 삭제
        </button>
      </div>
    </div>
  );
}

export default ReviewListItem;
