import React from 'react';
import Tag from '../tag/Tag';
import Rating from '../rating/Rating';
import { BooksByType } from '../../../data/dummy/booksByType';

interface Props {
  bookData: BooksByType;
}

function BookItem({ bookData }: Props) {
  return (
    <div className='flex w-full gap-[20px] text-gray-800'>
      <div className='h-[170px] w-[120px] bg-gray-400'>image</div>
      <div className='flex flex-1 flex-col gap-[16px]'>
        <div className='flex flex-col gap-[4px]'>
          <h5 className='text-body_xl_bold'>{bookData.name}</h5>
          <span className='text-caption_bold text-gray-600'>
            {bookData.author}
          </span>
        </div>
        <div className='flex flex-col gap-[8px]'>
          <Rating rating={bookData.rating} />
          <div className='flex flex-col gap-[4px]'>
            {bookData.totalReviews > 0 ? (
              <>
                <Tag type='pros' text='술술 읽혀요' />
                <Tag type='cons' text='다른 비슷한 책이 더 나아요' />
              </>
            ) : (
              <Tag type='default' />
            )}
          </div>
          <span className='text-caption_bold text-gray-600'>
            총 {bookData.totalReviews}개의 리뷰
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
