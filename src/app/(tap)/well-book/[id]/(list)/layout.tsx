'use client';

import BookInfo from '@/components/Book/BookInfo';
import TapHeader from '@/components/Header/TapHeader';
import { CATEGORY } from '@/constants/category';
import { useScroll } from '@/hooks/gesture/useScroll';
import React from 'react';

interface Props {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

function ReviewMemoLayout({ children, params: { id } }: Props) {
  useScroll({
    categoryColor: CATEGORY[1].bg,
    foreground: CATEGORY[1].text,
    unSelected: CATEGORY[1].band,
  });
  return (
    <>
      <TapHeader bookId={id} />
      <BookInfo bookId={id} />
      <div className='flex-child-layout tooltip-after relative flex-1 rounded-t-[20px] bg-category-bg-novel after:-top-[10px] after:border-[16px] after:border-category-bg-novel'>
        {children}
      </div>
    </>
  );
}

export default ReviewMemoLayout;
