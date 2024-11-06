'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useScroll } from '@/hooks/gesture/useScroll';
import RatingSelector from '@/components/Rating/RatingSelector';
import AddButton from '@/components/Button/AddButton';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import MajorTagList from '@/components/Tag/MajorTagList';
import { useBookDetail } from '../hooks/useBookDetail';
import BookDetail from './BookDetail/BookDetail';
import AddBookToWell from './BottomSheet/AddBookToWell';

interface Props {
  bookId: string;
}

function AboutBook({ bookId }: Props) {
  const { bookData } = useBookDetail(bookId);
  const [open, setOpen] = useState(false);
  useScroll({ categoryColor: undefined });

  return (
    <>
      <div className='flex w-full flex-col gap-[36px] bg-white'>
        <div className='flex w-full flex-col gap-[36px] px-page'>
          <RatingSelector
            type='default'
            rating={bookData?.avg_rating}
            review_cnt={bookData?.review_cnt}
          />
          <AddButton
            text='우물에 책 추가하기'
            categoryId={bookData?.category}
            onClick={() => runWhenLoggedIn(() => setOpen(true))}
          />
          <MajorTagList type='pros' tagData={bookData?.tags_pos} />
          <MajorTagList type='cons' tagData={bookData?.tags_neg} />
        </div>
        <BookDetail bookId={bookId} />
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
