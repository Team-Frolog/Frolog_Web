'use client';

import React from 'react';

interface Props {
  currentTap: string;
  setCurrentTap: React.Dispatch<React.SetStateAction<string>>;
}

function BookDetailTap({ currentTap, setCurrentTap }: Props) {
  return (
    <div className='flex w-full flex-col'>
      <div className='grid w-full grid-cols-2 pb-[2px]'>
        <button
          type='button'
          onClick={() => setCurrentTap('도서 정보')}
          className={`p-[16px] text-body_xl_bold ${currentTap === '도서 정보' ? 'text-gray-900' : 'text-gray-500'}`}
        >
          도서 정보
        </button>
        <button
          type='button'
          onClick={() => setCurrentTap('리뷰 모음')}
          className={`p-[16px] text-body_xl_bold ${currentTap === '리뷰 모음' ? 'text-gray-900' : 'text-gray-500'}`}
        >
          리뷰 모음
        </button>
      </div>
      <div className='relative h-[2px] w-full bg-gray-500'>
        <div
          className={`absolute bottom-0 h-full w-1/2 bg-gray-900 transition-all ${currentTap === '도서 정보' ? 'left-0' : 'left-1/2'}`}
        />
      </div>
    </div>
  );
}

export default BookDetailTap;
