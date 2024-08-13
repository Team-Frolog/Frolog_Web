'use client';

import DeleteButton from '@/components/ListItem/DeleteButton';
import { useRouter } from 'next/navigation';
import React from 'react';
import PageTag from '../Tag/PageTag';

function MemoListItem() {
  const router = useRouter();

  return (
    <div className='review-item px-0 pb-0'>
      <div className='flex w-full flex-col gap-[12px]'>
        <div
          onClick={() => router.push(`/well-book/9791193154250/memo/1`)}
          className='flex w-full cursor-pointer flex-col gap-[20px]'
        >
          <div className='flex w-full flex-col gap-[8px]'>
            <div className='px-page'>
              <PageTag pageNum={100} />
            </div>
          </div>
          <div className='flex w-full flex-col gap-[20px] px-page'>
            <div className='flex w-full gap-[20px]'>
              <div className='h-[160px] w-[160px] rounded-[8px] bg-gray-100' />
              <div className='h-[160px] w-[160px] rounded-[8px] bg-gray-100' />
            </div>
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
      </div>
      <DeleteButton buttonText='메모 삭제' />
    </div>
  );
}

export default MemoListItem;
