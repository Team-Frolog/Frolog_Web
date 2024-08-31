'use client';

import DeleteButton from '@/components/ListItem/DeleteButton';
import { useRouter } from 'next/navigation';
import React from 'react';
import ImageSlider from '../MemoForm/ImageForm/ImageSlider';

function MemoListItem() {
  const router = useRouter();

  return (
    <div className='review-item px-0 pb-0'>
      <div
        className='flex w-full flex-col gap-[20px]'
        onClick={() => router.push(`/well-book/9791193154250/memo/1`)}
      >
        <ImageSlider isReadOnly />
        <div className='flex w-full flex-col gap-[20px] px-page'>
          <p>
            내가 책을 덮으면서 느낀 감정을 한마디로 표현을 내가 책을 덮으면서
            느낀 감정을 한마디로 표현...
          </p>
          <div className='flex w-full justify-between'>
            <span className='text-body_md text-gray-600'>
              2023.07.03 (수정됨)
            </span>
            <span className='text-body_lg_bold text-main'>공개</span>
          </div>
        </div>
      </div>
      <DeleteButton buttonText='메모 삭제' />
    </div>
  );
}

export default MemoListItem;
