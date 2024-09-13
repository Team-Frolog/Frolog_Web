'use client';

import BookInfo from '@/components/Book/BookInfo';
import MainLayout from '@/layouts/MainLayout';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  children: React.ReactNode;
  params: {
    reviewId?: string;
    memoId?: string;
  };
}

function BookLayout({ children, params: { reviewId, memoId } }: Props) {
  const pathname = usePathname();
  const bookId = memoId || reviewId || '9791193154250'; // 임시

  return (
    <>
      <ResponsiveHeaderLayout onClick={() => {}}>
        <div className='flex flex-1 justify-end'>
          <button type='button' className='text-body-lg-bold text-main'>
            우물에 놀러가기
          </button>
        </div>
      </ResponsiveHeaderLayout>
      <MainLayout>
        <div className='flex w-full flex-col gap-[36px] bg-gray-900'>
          <h1 className='w-fit max-w-[300px] px-page text-heading-md-bold text-white'>
            홍길동과고길동과도라에몽의{' '}
            {pathname.includes('review') ? '리뷰' : '메모'}
          </h1>
          <BookInfo bookId={bookId} />
        </div>
        {children}
      </MainLayout>
    </>
  );
}

export default BookLayout;
