import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import { EnterIcon } from 'public/icons';
import CommentSkeleton from './CommentSkeleton';

function CommentListSkeleton() {
  return (
    <>
      <MainLayout extraClass='gap-[36px] py-[12px]'>
        <CommentSkeleton />
        <CommentSkeleton />
        <CommentSkeleton />
      </MainLayout>
      <div className='z-70 flex h-max w-full shrink-0 flex-col'>
        <div className='flex bg-white px-page py-[20px]'>
          <div className='relative flex w-full'>
            <input
              className='input-common input-light flex-1 pr-[60px] placeholder:text-body-lg'
              placeholder='댓글을 입력해주세요'
            />
            <button type='button'>
              <EnterIcon
                fill='#E0E1E9'
                className='absolute right-[16px] top-1/2 -translate-y-1/2'
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentListSkeleton;
