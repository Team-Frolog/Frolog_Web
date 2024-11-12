'use client';

import MainLayout from '@/layouts/MainLayout';
import BookInfo from '@/components/Book/BookInfo';
import TapHeader from '@/components/Header/TapHeader';
import { CATEGORY } from '@/constants/category';
import { useScroll } from '@/hooks/gesture/useScroll';
import React, { Suspense } from 'react';
import BookInfoSkeleton from '@/components/Fallback/Skeleton/BookInfoSkeleton';
import { useBook } from '@/features/Book';

interface Props {
  children: React.ReactNode;
  params: {
    bookId: string;
  };
}

function ReviewMemoLayout({ children, params: { bookId } }: Props) {
  const { bookData } = useBook(bookId);
  const category = bookData?.category || 'novel';

  useScroll({
    categoryColor: CATEGORY[category].bg,
    foreground: CATEGORY[category].text,
    unSelected: CATEGORY[category].band,
  });

  return (
    <>
      <TapHeader />
      <MainLayout extraClass='bg-gray-900'>
        <Suspense fallback={<BookInfoSkeleton />}>
          <BookInfo bookId={bookId} canClick />
        </Suspense>

        <div className='flex w-full flex-1 flex-col bg-white'>
          <div
            className={`flex-child-layout tooltip-after bg-category-bg-${category} relative flex-1 rounded-t-[20px] pt-[24px]`}
          >
            <div
              className={`absolute left-1/2 top-[-10px] h-0 w-0 -translate-x-1/2 rotate-45 transform border-[16px] border-solid border-category-bg-${category} z-0`}
            />
            {children}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default ReviewMemoLayout;
