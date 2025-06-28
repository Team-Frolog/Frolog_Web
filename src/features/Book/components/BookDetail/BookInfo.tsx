import React from 'react';
import { GetBookRes } from '@frolog/frolog-api';

interface Props {
  bookData: GetBookRes;
}

/** 도서 상세 페이지 내 도서 정보 컴포넌트
 * - ISBN, 출판사, 책 소개 정보가 포함되어 있습니다.
 */
function BookInfo({ bookData }: Props) {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex w-full flex-col gap-[20px] px-page py-[36px]'>
        <div className='flex w-full flex-col gap-[8px]'>
          <h5 className='text-body-lg-bold text-gray-800'>출판사</h5>
          <span className='text-body-lg text-gray-600'>
            {bookData?.publisher}
          </span>
        </div>
        <div className='flex w-full flex-col gap-[8px]'>
          <h5 className='text-body-lg-bold text-gray-800'>ISBN</h5>
          <span className='text-body-lg text-gray-600'>{bookData?.isbn}</span>
        </div>
      </div>
      <hr className='h-[2px] w-full bg-gray-300' />
      <div className='flex w-full flex-col gap-[20px] px-page py-[36px]'>
        <h5 className='text-body-lg-bold text-gray-800'>책 소개</h5>
        <p className='safe-bottom break-all text-body-lg text-gray-600'>
          {bookData?.desc}
        </p>
      </div>
    </div>
  );
}

export default BookInfo;
