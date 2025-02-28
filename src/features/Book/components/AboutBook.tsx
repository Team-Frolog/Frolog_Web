'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useScroll } from '@/hooks/gesture/useScroll';
import RatingSelector from '@/components/Rating/RatingSelector';
import AddButton from '@/components/Button/AddButton';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import MajorTagList from '@/components/Tag/MajorTagList';
import { useBook } from '../hooks/useBook';
import BookInfoTap from './BookDetail/BookInfoTap';
import AddBookToWell from './BottomSheet/AddBookToWell';

interface Props {
  bookId: string;
}

/** 도서 상세 페이지 중 정보 부분 컴포넌트 */
function AboutBook({ bookId }: Props) {
  const { bookData } = useBook(bookId);
  const [open, setOpen] = useState(false);
  useScroll({});

  return (
    <>
      <div className='flex w-full flex-col gap-[36px] bg-white'>
        <div className='flex w-full flex-col gap-[36px] px-page'>
          <RatingSelector
            type='default'
            rating={bookData?.avg_rating}
            review_cnt={bookData?.review_cnt}
            onClick={() => runWhenLoggedIn(() => setOpen(true))}
          />
          <AddButton
            text='내 우물에 추가하기'
            categoryId={bookData?.category}
            onClick={() => runWhenLoggedIn(() => setOpen(true))}
          />
          <MajorTagList type='pros' tagKeys={bookData?.tags_pos} />
          <MajorTagList type='cons' tagKeys={bookData?.tags_neg} />
        </div>
        <BookInfoTap bookId={bookId} />
      </div>
      <AnimatePresence>
        {open && (
          <AddBookToWell bookId={bookId} closeSheet={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default AboutBook;
