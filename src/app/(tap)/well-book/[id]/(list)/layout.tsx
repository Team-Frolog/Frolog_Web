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
    categoryColor: CATEGORY[+id].bg,
    foreground: CATEGORY[+id].text,
    unSelected: CATEGORY[+id].band,
  });
  return (
    <>
      <TapHeader bookId={id} />
      <BookInfo bookId={id} />
      <div className='flex-child-layout tooltip-after relative flex-1 gap-[12px] rounded-t-[20px] bg-category-bg-novel py-[20px] after:-top-[10px] after:border-[16px] after:border-category-bg-novel'>
        {children}
      </div>
    </>
  );
}

export default ReviewMemoLayout;
