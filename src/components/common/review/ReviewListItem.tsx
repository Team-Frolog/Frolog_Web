import React from 'react';
import Rating from '../rating/Rating';
import TagSlider from './TagSlider';

function ReviewListItem() {
  return (
    <div className='flex w-full flex-col gap-[20px] rounded-[20px] bg-white px-[24px] py-[36px]'>
      <div className='flex w-full flex-col gap-[12px]'>
        <div className='text-gray-800'>
          <span className='rounded-[20px] bg-gray-800 px-[10px] py-[6px] text-body_sm_bold text-white'>
            1회차 독서
          </span>
          <Rating rating={4.5} textClass='text-h_lg_bold' />
          <h3 className='text-title_xl_bold'>
            예측불허의 긴장된 상태로 성적표를 처음 받아보았을 때를 잊을 수가
            없다.
          </h3>
          <div className='flex flex-col gap-[4px]'>
            <TagSlider />
            <TagSlider />
          </div>
        </div>
      </div>
      <span>date</span>
      <button type='button'>리뷰 삭제</button>
    </div>
  );
}

export default ReviewListItem;
