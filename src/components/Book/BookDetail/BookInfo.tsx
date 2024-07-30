import React from 'react';

function BookInfo() {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex w-full flex-col gap-[20px] px-page py-[36px]'>
        <div className='flex w-full flex-col gap-[8px]'>
          <h5 className='book-info-title'>출판사</h5>
          <span className='book-info-sub'>행복한 출판사</span>
        </div>
        <div className='flex w-full flex-col gap-[8px]'>
          <h5 className='book-info-title'>ISBN</h5>
          <span className='book-info-sub'>9791193154250</span>
        </div>
      </div>
      <hr className='h-[2px] w-full bg-gray-300' />
      <div className='flex w-full flex-col gap-[20px] px-page py-[36px]'>
        <h5 className='book-info-title'>책 소개</h5>
        <p className='book-info-sub break-all'>
          책 소개 입니다. 책 소개 입니다. 책 소개 입니다. 책 소개 입니다. 책
          소개 입니다. 책 소개 입니다. 책 소개 입니다. 책 소개 입니다. 책 소개
          입니다. 책 소개 입니다. 책 소개 입니다. 책 소개 입니다. 책 소개
          입니다. 책 소개 입니다. 책 소개 입니다. 책 소개 입니다. 책 소개
          입니다. 책 소개 입니다. 책 소개 입니다.{' '}
        </p>
      </div>
    </div>
  );
}

export default BookInfo;
