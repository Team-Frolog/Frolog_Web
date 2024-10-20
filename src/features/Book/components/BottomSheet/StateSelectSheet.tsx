'use client';

import React from 'react';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';

interface Props {
  reviewCount: number | undefined;
  handleAddReadBook: () => void;
  handleAddReadingBook: () => void;
}

function StateSelectSheet({
  reviewCount,
  handleAddReadBook,
  handleAddReadingBook,
}: Props) {
  return (
    <div className='flex w-full flex-col gap-[20px] pb-[32px] pt-[28px] text-title-xl-bold text-gray-800'>
      <button
        type='button'
        onClick={handleAddReadBook}
        className='flex h-[95px] items-center justify-between gap-[20px] rounded-[12px] bg-gray-200 pl-[30px] pr-[10px]'
      >
        <span>다 읽었어요</span>
        <div className='flex h-full items-end'>
          <Image
            src={IMAGES.frog.add.done}
            alt='done'
            width={127}
            height={61}
          />
        </div>
      </button>
      <button
        type='button'
        disabled={!!reviewCount}
        onClick={handleAddReadingBook}
        className={`flex h-[95px] items-center justify-between gap-[20px] rounded-[12px] bg-gray-200 pl-[30px] pr-[10px] ${reviewCount ? 'opacity-10' : ''}`}
      >
        <span>읽는 중이에요</span>
        <div className='flex h-full items-end'>
          <Image
            src={IMAGES.frog.add.reading}
            alt='reading'
            width={127}
            height={61}
          />
        </div>
      </button>
    </div>
  );
}

export default StateSelectSheet;