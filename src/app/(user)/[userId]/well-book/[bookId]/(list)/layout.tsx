'use client';

import MainLayout from '@/layouts/MainLayout';
import BookInfo from '@/components/Book/BookInfo';
import TapHeader from '@/components/Header/TapHeader';
import { CATEGORY } from '@/constants/category';
import { useScroll } from '@/hooks/gesture/useScroll';
import React, { Suspense } from 'react';
import BookInfoSkeleton from '@/components/Fallback/Skeleton/BookInfoSkeleton';

interface Props {
  children: React.ReactNode;
  params: {
    bookId: string;
  };
}

function ReviewMemoLayout({ children, params: { bookId } }: Props) {
  useScroll({
    categoryColor: CATEGORY.novel.bg,
    foreground: CATEGORY.novel.text,
    unSelected: CATEGORY.novel.band,
  });
  return (
    <>
      <TapHeader />
      <MainLayout>
        <Suspense fallback={<BookInfoSkeleton />}>
          <BookInfo bookId={bookId} />
        </Suspense>

        <div className='flex-child-layout tooltip-after relative flex-1 rounded-t-[20px] bg-category-bg-novel pt-[24px] after:-top-[10px] after:z-0 after:border-[16px] after:border-category-bg-novel'>
          {children}
        </div>
      </MainLayout>
    </>
  );
}

export default ReviewMemoLayout;
